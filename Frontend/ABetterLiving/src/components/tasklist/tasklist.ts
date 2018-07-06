import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { TaskProvider } from '../../providers/task/task';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'tasklist',
  templateUrl: 'tasklist.html'
})
export class TasklistComponent implements OnInit {

  private tasks: Array<Task>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private taskProvider: TaskProvider) {
  }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks(): void {
    this.taskProvider.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Homepage');
  }

  setTaskToDone(id) {
    alert("Task mit ID " + id + " ist erledigt!");
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
