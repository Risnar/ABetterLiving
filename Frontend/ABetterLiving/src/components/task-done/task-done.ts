import { Component } from '@angular/core';

/**
 * Generated class for the TaskDoneComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'task-done',
  templateUrl: 'task-done.html'
})
export class TaskDoneComponent {

  text: string;

  constructor() {
    console.log('Hello TaskDoneComponent Component');
    this.text = 'Hello World';
  }

}
