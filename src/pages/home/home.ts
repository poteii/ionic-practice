import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  personName: string;

  constructor(public navCtrl: NavController, private toast: ToastController) {

  }

  showGreeting(name: string) {
    console.log(name);
    console.log(this.personName);
    this.toast.create({
      message: `Hello ${name}`,
      duration: 3000
    }).present();
  }

}
