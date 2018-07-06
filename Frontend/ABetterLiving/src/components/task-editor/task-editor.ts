import { Component } from '@angular/core';

/**
 * Generated class for the TaskEditorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'task-editor',
  templateUrl: 'task-editor.html'
})
export class TaskEditorComponent {

  text: string;

  constructor() {
    console.log('Hello TaskEditorComponent Component');
    this.text = 'Hello World';
  }

}
