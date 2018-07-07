import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Task } from '../../model/task';
import { SrvResponse } from '../../model/srvResponse'
import { TaskProvider } from '../../providers/task/task';
import { isDefined } from 'ionic-angular/umd/util/util';
import { NativeAudio } from '@ionic-native/native-audio';

/**
 * Generated class for the TaskEditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-editor',
  templateUrl: 'task-editor.html',
})
export class TaskEditorPage {

  taskForm: FormGroup;
  taskList: Task[];
  task: Task;
  title: String = "Neuer Task erfassen";
  hiddenDeleteButton = 0;

  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController, private taskProvider: TaskProvider) {
    console.log(this);
    if (navParams.data.taskList !== undefined) {
      this.taskList = navParams.data.taskList;
    }
    if (navParams.data.editorMode == "edit") {
      this.task = navParams.data.task;
      this.title = navParams.data.task.title;
    } else {
      this.task = {
        taskID: null,
        title: "",
        note: "",
        priority: 0,
        requiredTime: '00:00',
        dueDate: new Date().toISOString(),
        creationDate: new Date().toISOString(),
        status: false,
        list: null,
        project: null,
        owner: null
      } as Task;
      this.hiddenDeleteButton = 1;
    }
  }


  ionViewDidLoad() {
    this.taskForm = this.formBuilder.group({

    });
  }

  onSubmit() {
    if (this.navParams.data.editorMode == "edit") {
      this.taskProvider.updateTask(this.task).subscribe(response => {
        if (response.successful) {
          this.showAlert("Task angepasst", 'Der Task wurde erfolgreich angepasst.');
          //-->Play sound
          this.nativeAudio.play('nicework');
          //Auf die rootpage zurückkehren
          this.navCtrl.popToRoot();
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
    } else {
      this.taskProvider.addTask(this.task).subscribe(response => {
        if (response.successful) {
          this.showAlert("Task hinzugefügt", 'Der Task wurde erfolgreich gespeichert.');
          //-->Play sound
          this.nativeAudio.play('nicework');
          //Fügt den neuen Task dem arraylist aus dem parent hinzu
          if (this.taskList !== undefined) {
            this.taskList.push(response.data as Task);
          }
          //Auf die rootpage zurückkehren
          this.navCtrl.popToRoot();
        } else {
          this.showAlert("Speichern fehlgeschlagen", 'Der Task wurde nicht erfolgreich gespeichert.');
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
  }

  public deleteTask() {
    this.taskProvider.deleteTask(this.task).subscribe(response => {
      if (response.successful) {
        this.showAlert("Löschen erfolgreich", 'Der Task wurde erfolgreich gelöscht.');
        //-->Play sound
        this.nativeAudio.play('thatsit');
        //Entfernt den task aus dem tasklist array welches vom parent übergeben wurde.
        if (this.taskList !== undefined) {
          const idx = this.taskList.indexOf(this.task);
          this.taskList.splice(idx, 1);
        }
        //Auf die rootpage zurückkehren
        this.navCtrl.popToRoot();
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



  nameValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
      return { invalidName: true };
    }
  }

  phoneValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value !== '') {
      if (!control.value.match('\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}')) {
        return { invalidPhone: true };
      }
    }
  }

  emailValidator(control: FormControl): { [s: string]: boolean } {
    if (!(control.value.toLowerCase().match('^[a-zA-Z]\\w*@gmail\\.com$') || control.value.toLowerCase().match('^[a-zA-Z]\\w*@yahoo\\.com$'))) {
      return { invalidEmail: true };
    }
  }

}
