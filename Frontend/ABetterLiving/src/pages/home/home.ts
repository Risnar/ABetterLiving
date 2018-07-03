import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /*lists: Array<{category: string, items: Array<{
          title: string
        }>
  }>;*/

  constructor(public navCtrl: NavController) {
    /*item = {}
    this.lists.push({
      category: 'Heute',
      items: {
        title: 'text'
      }
    });*/
  }

  itemTapped(event, item) {
    console.log(item);
    /*this.navCtrl.push(ListPage, {
      item: item
    });*/
  }
}