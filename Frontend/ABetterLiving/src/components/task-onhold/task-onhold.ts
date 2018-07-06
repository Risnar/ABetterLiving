import { Component } from '@angular/core';

/**
 * Generated class for the TaskOnholdComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'task-onhold',
  templateUrl: 'task-onhold.html'
})
export class TaskOnholdComponent {

  text: string;

  constructor() {
    console.log('Hello TaskOnholdComponent Component');
    this.text = 'Hello World';
  }

}
