import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { TaskProvider } from '../../providers/task/task';

@Component({
  selector: 'tasklist',
  templateUrl: 'tasklist.html'
})
export class TasklistComponent implements OnInit{

  private tasks: Array<Task> = [];

  constructor(private taskProvider: TaskProvider) {
  }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks(): void {
    this.taskProvider.getAllTasks().subscribe( tasks => {
      this.tasks = tasks;      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Homepage');
  }

  setTaskToDone(id){
    alert("Task mit ID " +id + " ist erledigt!");
  }

  openTaskDetail(id){
    alert("Task mit ID " +id + " wird geöffnet !");
  }

  deleteTask(id){
    alert("Task mit ID " +id + " wird gelöscht");
    this.taskProvider.deleteTask(id);
  }




}
