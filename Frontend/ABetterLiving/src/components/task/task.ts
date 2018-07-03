import { Component } from '@angular/core';

/**
 * Generated class for the TaskComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'task',
  templateUrl: 'task.html'
})
export class TaskComponent {

  text: string;

  constructor() {
    console.log('Hello TaskComponent Component');
    this.text = 'Hello World';
  }

}
