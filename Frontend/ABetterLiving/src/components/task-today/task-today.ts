import { Component } from '@angular/core';

/**
 * Generated class for the TaskTodayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'task-today',
  templateUrl: 'task-today.html'
})
export class TaskTodayComponent {

  text: string;

  constructor() {
    console.log('Hello TaskTodayComponent Component');
    this.text = 'Hello World';
  }

}
