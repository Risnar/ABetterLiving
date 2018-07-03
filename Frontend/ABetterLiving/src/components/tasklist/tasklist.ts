import { Component } from '@angular/core';

/**
 * Generated class for the TasklistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tasklist',
  templateUrl: 'tasklist.html'
})
export class TasklistComponent {

  text: string;

  constructor() {
    console.log('Hello TasklistComponent Component');
    this.text = 'Hello World';
  }

}
