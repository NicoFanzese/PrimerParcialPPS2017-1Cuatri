import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navCtrl = navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

   Login(email: string ) { 
      console.log(email);
      this.navCtrl.push(TabsPage);
  }

}
