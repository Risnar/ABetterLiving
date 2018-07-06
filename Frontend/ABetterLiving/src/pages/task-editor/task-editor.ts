import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Task } from '../../model/task';
import { SrvResponse } from '../../model/srvResponse'
import { TaskProvider } from '../../providers/task/task';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController, private taskProvider: TaskProvider) {
    console.log(this);
    if (navParams.data.editorMode == "edit") {
      this.taskList = navParams.data.taskList;
      this.task = navParams.data.task;
      this.title = navParams.data.task.title;
    } else {
      this.task = {
        taskID: null,
        title: "",
        note: "",
        priority: 0,
        requiredTime: null,
        dueDate: null,
        creationDate: null,
        status: 0,
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
    console.log("save");
    if (this.navParams.data.editorMode == "edit") {
      this.taskProvider.updateTask(this.task).subscribe(response => {
        if (response.successful) {
          this.showAlert("Löschen fehlgeschlagen", 'Der Task wurde erfolgreich angepasst.');
        } else {
          this.showAlert("Löschen fehlgeschlagen", 'Der Task wurde nicht erfolgreich angepasst.');
        }
      },
        error => {
          console.log(error);
          this.showAlert("Fehler", 'Beim speichern ist ein Fehler aufgetreten. ' + error);
        });
    } else {
      this.taskProvider.addTask(this.task).subscribe(response => {
        if (response.successful) {
          this.showAlert("Löschen fehlgeschlagen", 'Der Task wurde erfolgreich gespeichert.');
        } else {
          this.showAlert("Löschen fehlgeschlagen", 'Der Task wurde nicht erfolgreich gespeichert.');
        }
      },
        error => {
          console.log(error);
          this.showAlert("Fehler", 'Beim speichern ist ein Fehler aufgetreten. ' + error);
        });
    }
  }

  public deleteTask() {
    this.taskProvider.deleteTask(this.task).subscribe(response => {
      if (response.successful) {
        this.showAlert("Löschen fehlgeschlagen", 'Der Task wurde erfolgreich gelöscht.');
        //Entfernt den task aus dem tasklist array welches vom parent übergeben wurde.
        const idx = this.taskList.indexOf(this.task);
        this.taskList.splice(idx, 1);
        //Auf die rootpage zurückkehren
        this.navCtrl.popToRoot();
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
