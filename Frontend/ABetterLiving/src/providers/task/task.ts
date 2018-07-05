import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from "../../model/task";
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type': 'application/json'})
};

@Injectable()
export class TaskProvider {

  private tasksUrl = 'http://localhost:8080/task';  // URL to web api

  constructor(public http: HttpClient) {

  }

  // GET /task/all
  getAllTasks (): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl+"/all", httpOptions);
  }

  // GET /task/:id . Will 404 if id not found 
  getTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url, httpOptions);
  }

  // POST /task
  addTask (task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, httpOptions);
  }
 
  // DELETE /task/{id}
  deleteTask (task: Task | number): Observable<Task> {
    const id = typeof task === 'number' ? task : task.taskID;
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete<Task>(url, httpOptions);
  }

}
