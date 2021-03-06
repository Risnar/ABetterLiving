import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../model/task';
import { TaskProvider } from '../../providers/task/task';
import { NavController, AlertController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'tasklist',
  templateUrl: 'tasklist.html'
})
export class TasklistComponent implements OnInit {

  private openSoundArray: Array<string> = ['yeah', 'woohoo', 'unbelievable'];
  private tasks: Array<Task> = [];
  @Input() listType: string;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private taskProvider: TaskProvider,
    private nativeAudio: NativeAudio,
  ) { }

  ngOnInit() {
    this.getAllTasks();
  }


  getAllTasks(): void {
    this.taskProvider.getAllTasks().subscribe(tasks => {
      this.filterHandler(tasks);
      this.playTaskNotification(this.tasks.length);
    });
  }

  private playTaskNotification(number) {
    switch (number) {
      case 1:
        this.nativeAudio.play('onetask');
        break;
      case 2:
        this.nativeAudio.play('twotasks');
        break;
      case 3:
        this.nativeAudio.play('threetasks');
        break;
      default:
        this.nativeAudio.play('severaltasks');
        break;
    }
  }

  public filterHandler(tasks) {

    switch (this.listType) {
      case 'Alle':
        this.filterTaskAll(tasks);
        break;
      case 'Erledigt':
        this.filterTaskByStatusDone(tasks);
        break;
      case 'Unerledigt':
        this.filterTaskByStatusUnDone(tasks);
        break;
      case 'Heute':
        this.filterTaskByDueDateToday(tasks);
        break;
      case 'Kalender':
        this.filterTaskByPriorityHigh(tasks);
        break;
    }
  }

  public filterTaskAll(tasks) {
    tasks.forEach(task => {
      this.tasks.push(task);
    });
  }

  public filterTaskByStatusDone(tasks) {
    tasks.forEach(task => {
      if (task.status == true) {
        this.tasks.push(task);
      }
    });
  }

  public filterTaskByStatusUnDone(tasks) {
    tasks.forEach(task => {
      if (task.status == false) {
        this.tasks.push(task);
      }
    });
  }

  public filterTaskByDueDateToday(tasks) {
    var today = new Date();
    tasks.forEach(task => {
      var taskDueDate = new Date(task.dueDate);
      if (today.setHours(0, 0, 0, 0) == taskDueDate.setHours(0, 0, 0, 0)) {
        this.tasks.push(task);
      }
    });
  }

  public filterTaskByPriorityHigh(tasks) {
    tasks.forEach(task => {
      if (task.priority != 0) {
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
    //-->Play sound
    this.nativeAudio.play('doyourbest');
  }

  setTaskToDone(task) {
    if (task.status === false) {
      task.status = true;
    } else if (task.status === true) {
      task.status = false;
    }

    this.taskProvider.updateTask(task).subscribe(response => {
      if (response.successful) {
        //Entfernt den task aus dem tasklist array welches vom parent übergeben wurde.
        if (this.tasks !== undefined) {
          const idx = this.tasks.indexOf(task);
          this.tasks.splice(idx, 1);
        }
        this.showAlert("Task angepasst", 'Task wurde als erledigt markiert!');
        //-->Play sound
        this.nativeAudio.play(this.openSoundArray[Math.floor(Math.random() * 3) + 0])
      } else {
        this.showAlert("Anpassung fehlgeschlagen", 'Der Task wurde nicht erfolgreich angepasst.');
        //-->Play sound
        this.nativeAudio.play('nexttime');
      }
    },
      error => {
        console.log(error);
        this.showAlert("Fehler", 'Beim speichern ist ein Fehler aufgetreten. ' + error);
        //-->Play sound
        this.nativeAudio.play('nexttime');
      });
  }

  openTaskDetail(task) {
    this.navCtrl.push('TaskEditorPage', {
      task: task,
      taskList: this.tasks,
      editorMode: 'edit'
    });
    //-->Play sound
    this.nativeAudio.play('doyourbest');
  }

  deleteTask(task) {
    this.taskProvider.deleteTask(task).subscribe(response => {
      if (response.successful) {
        this.showAlert("Löschen erfolgreich", 'Der Task wurde erfolgreich gelöscht.');
        //Entfernt den task aus dem tasklist array welches vom parent übergeben wurde.
        const idx = this.tasks.indexOf(task);
        this.tasks.splice(idx, 1);
        //-->Play sound
        this.nativeAudio.play('woohoo');
      } else {
        this.showAlert("Löschen fehlgeschlagen", 'Der Task wurde nicht erfolgreich gelöscht.');
        //-->Play sound
        this.nativeAudio.play('nexttime');
      }
    },
      error => {
        console.log(error);
        this.showAlert("Fehler", 'Beim löschen ist ein Fehler aufgetreten. ' + error);
        //-->Play sound
        this.nativeAudio.play('nexttime');
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
