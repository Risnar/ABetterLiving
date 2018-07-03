<<<<<<< current
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lists: Array<{category: string, items: Array<{
          title: string
        }>
  }>;

  constructor(public navCtrl: NavController) {
    item = {}
    this.lists.push({
      category: 'Heute',
      items: {
        title: 'text'
      }
    });
  }

  itemTapped(event, item) {
    console.log(item);
    /*this.navCtrl.push(ListPage, {
      item: item
    });*/
  }
}
=======
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { List } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menuItems: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {
    this.menuItems = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];
  }

}
>>>>>>> before discard
