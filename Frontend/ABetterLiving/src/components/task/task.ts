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
  http: any;
  task: any;

  load() {
    this.http.get('http://localhost:8080/task/all').map(res => res.json()).subscribe(data => {
       this.task = data;
    });
 }

  text: string;

  constructor() {
    console.log('Hello TaskComponent Component');
    this.text = 'Hello World';
  }

}
