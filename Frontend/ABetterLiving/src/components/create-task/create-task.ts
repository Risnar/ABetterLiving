import { Component, OnInit } from '@angular/core';
import { TaskProvider } from '../../providers/task/task';
import { Task } from '../../model/task';


@Component({
  selector: 'create-task',
  templateUrl: 'create-task.html'
})
export class CreateTaskComponent implements OnInit{

  task: Task;

  constructor(private taskProvider: TaskProvider) {
  }

  ngOnInit() {
    this.getAllTasks(this.task);
  }

  getAllTasks(task): void {
    this.taskProvider.addTask(task)
  }


}
