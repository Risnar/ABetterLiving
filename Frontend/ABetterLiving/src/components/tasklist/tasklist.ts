import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { TaskProvider } from '../../providers/task/task';
import { NavController, AlertController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'tasklist',
  templateUrl: 'tasklist.html'
})
export class TasklistComponent implements OnInit {

  private tasks: Array<Task>;
  private openSoundArray: Array<string> = ['yeah', 'woohoo', 'unbelievable'];

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private taskProvider: TaskProvider,
    private nativeAudio: NativeAudio) { }

  ngOnInit() {
    this.getAllTasks();
  }


  getAllTasks(): void {
    this.taskProvider.getAllTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.playTaskNotification(tasks.length);
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

  public openTaskEditor() {
    this.navCtrl.push('TaskEditorPage', {
      task: null,
      taskList: this.tasks,
      editorMode: 'new'
    });
    //-->Play sound
    this.nativeAudio.play('doyourbest');
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
    //-->Play sound
    this.nativeAudio.play(this.openSoundArray[Math.floor(Math.random() * 3) + 0])
  }

  deleteTask(task) {
    this.taskProvider.deleteTask(task).subscribe(response => {
      if (response.successful) {
        this.showAlert("Löschen fehlgeschlagen", 'Der Task wurde erfolgreich gelöscht.');
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
