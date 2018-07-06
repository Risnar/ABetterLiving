import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { TaskProvider } from '../../providers/task/task';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'tasklist',
  templateUrl: 'tasklist.html'
})
export class TasklistComponent implements OnInit {

  private tasks: Array<Task> = [];
  // listType: string = "Erledigt";
  public listType: string;
  private currentDate: Date;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private taskProvider: TaskProvider,
    // public listType: string
  ) {
  }

  ngOnInit() {
    this.getAllTasks();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Homepage');
  }


  getAllTasks(): void {
    this.taskProvider.getAllTasks().subscribe(tasks => {
      // this.tasks = tasks;
      this.filterHandler(tasks);
    });
  }

  public filterHandler(tasks) {

    switch (this.listType) {
      case 'Alle':
        this.tasks = tasks;
        break;
      case 'Erledigt':
        this.filterTaskByStatus(tasks);
        break;
      // case 'Irgendwann':
      //   this.filterTaskByDueDate(tasks);
      //   break;
      // case 'Heute':
      //   this.filterTaskByDueDate(tasks);
      //   break;
      // case 'Wichtig':
      //   this.filterTaskByPriority(tasks);
      //   break;
      // case 'Unsortiert':
      //   // TODO
      //   break;
      // case 'Warten auf':
      //   // abhängig von anderem User
      //   break;
    }
  }

  public filterTaskByStatus(tasks) {
    tasks.forEach(task => {
      if (task.status != 1) {
        task.iconType = 'close-circle';
        this.tasks.push(task);
      } else {
        task.iconType = 'checkbox-outline';
        this.tasks.push(task);
      }
    });
  }

  public filterTaskByDueDate() {
    this.tasks.forEach(task => {

      this.currentDate = new Date();

      if (task.dueDate != null) {
        task.iconType = 'copy';
        this.tasks.push(task);
      }
      else if (task.dueDate === this.currentDate) {
        task.iconType = 'clipboard';
        this.tasks.push(task);
      }
    });
  }
  public filterTaskByPriority(tasks) {
    tasks.forEach(task => {
      if (task.priority = 0) {
        task.iconType = 'close-circle'
        this.tasks.push(task);
      } else if (task.priority = 1) {
        task.iconType = 'checkbox-outline'
        this.tasks.push(task);
      }
    });
  }


  public openTaskEditor() {
    this.navCtrl.push('TaskEditorPage', {
      task: null,
      taskList: this.tasks,
      editorMode: 'new'
    });
  }

  setTaskToDone(task) {
    task.status = 0 ? 1 : 0;

    this.taskProvider.updateTask(task).subscribe(response => {
      if (response.successful) {
        this.showAlert("Task angepasst", 'Task wurde als erledigt markiert!');
        //Auf die rootpage zurückkehren
      } else {
        this.showAlert("Anpassung fehlgeschlagen", 'Der Task wurde nicht erfolgreich angepasst.');
      }
    },
      error => {
        console.log(error);
        this.showAlert("Fehler", 'Beim speichern ist ein Fehler aufgetreten. ' + error);
      });
  }

  openTaskDetail(task) {
    this.navCtrl.push('TaskEditorPage', {
      task: task,
      taskList: this.tasks,
      editorMode: 'edit'
    });
  }

  deleteTask(task) {
    this.taskProvider.deleteTask(task).subscribe(response => {
      if (response.successful) {
        this.showAlert("Löschen fehlgeschlagen", 'Der Task wurde erfolgreich gelöscht.');
        //Entfernt den task aus dem tasklist array welches vom parent übergeben wurde.
        const idx = this.tasks.indexOf(task);
        this.tasks.splice(idx, 1);
      } else {
        this.showAlert("Löschen fehlgeschlagen", 'Der Task wurde nicht erfolgreich gelöscht.');
      }
    },
      error => {
        console.log(error);
        this.showAlert("Fehler", 'Beim löschen ist ein Fehler aufgetreten. ' + error);
      });
  }

  showAlert(title, msg) {
    this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    }).present();
  }



}
