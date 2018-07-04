import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';
import { Task } from '../../model/task';
import { TaskProvider } from '../../providers/task/task';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  private tasks: Array<Task> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private taskProvider: TaskProvider) {

  }
 
  ngOnInit() {
    this.getUnassignedTasks();
  }

  getUnassignedTasks(): void {
    this.taskProvider.getUnassignedTasks().subscribe( tasks => {
      this.tasks = tasks;      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }
}