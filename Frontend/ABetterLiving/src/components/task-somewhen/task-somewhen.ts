import { Component } from '@angular/core';

/**
 * Generated class for the TaskSomewhenComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'task-somewhen',
  templateUrl: 'task-somewhen.html'
})
export class TaskSomewhenComponent {

  text: string;

  constructor() {
    console.log('Hello TaskSomewhenComponent Component');
    this.text = 'Hello World';
  }

}
