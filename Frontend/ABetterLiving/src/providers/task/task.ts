import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from "../../model/task";
import { Observable } from 'rxjs/Observable';
import { SrvResponse } from '../../model/srvResponse';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class TaskProvider {

  private tasksUrl = 'http://192.168.178.142:8080/task';  // URL to web api

  constructor(
    public http: HttpClient
  ) {

  }

  // GET /task/all
  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl + "/all", httpOptions);
  }

  // GET /task/:id . Will 404 if id not found 
  getTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url, httpOptions);
  }


  // PUT /task/{id}
  updateTask(task: Task): Observable<SrvResponse> {
    const url = `${this.tasksUrl}/${task.taskID}`;
    return this.http.put<SrvResponse>(url, task, httpOptions);
  }

  // POST /task
  addTask(task: Task): Observable<SrvResponse> {
    return this.http.post<SrvResponse>(this.tasksUrl, task, httpOptions);
  }

  // DELETE /task/{id}
  deleteTask(task: Task | number): Observable<SrvResponse> {
    const id = typeof task === 'number' ? task : task.taskID;
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete<SrvResponse>(url, httpOptions);
  }


}
