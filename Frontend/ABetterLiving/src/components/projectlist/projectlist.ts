import { Component } from '@angular/core';

/**
 * Generated class for the ProjectlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'projectlist',
  templateUrl: 'projectlist.html'
})
export class ProjectlistComponent {

  text: string;

  constructor() {
    console.log('Hello ProjectlistComponent Component');
    this.text = 'Hello World';
  }

}
