import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Task } from '../../model/task';

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
  task: Task;
  public title: String = "Neuer Task erfassen";

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    console.log(navParams);
    if (navParams.data.editorMode == "edit") {
      this.task = navParams.data.task;
      this.title = navParams.data.task.title;
    }
  }


  ionViewDidLoad() {
    this.taskForm = this.formBuilder.group({

    });
  }

  onSubmit() {
    console.log('submitting form');
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
