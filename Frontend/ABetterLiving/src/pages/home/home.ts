import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { TaskProvider } from '../../providers/task/task';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  private tasks: Array<Task> = [];
  private username = '';
  private email = '';

  constructor(private nav: NavController, private auth: AuthService, private taskProvider: TaskProvider) {
    let info = this.auth.getUserInfo();
    this.username = info['name'];
    this.email = info['email'];
  }

  ngOnInit() {
    this.getUnassignedTasks();
  }

  getUnassignedTasks(): void {
    this.taskProvider.getUnassignedTasks().subscribe( (tasks) => {
      this.tasks = tasks;
    });
  }

}
