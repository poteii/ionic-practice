import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.message = this.navParams.get('message');
    alert(this.message);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

}
