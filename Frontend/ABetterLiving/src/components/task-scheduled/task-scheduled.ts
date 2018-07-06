import { Component } from '@angular/core';

/**
 * Generated class for the TaskScheduledComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'task-scheduled',
  templateUrl: 'task-scheduled.html'
})
export class TaskScheduledComponent {

  text: string;

  constructor() {
    console.log('Hello TaskScheduledComponent Component');
    this.text = 'Hello World';
  }

}
