import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {Servicio} from '../../providers/servicio';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuario: Servicio) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

   Login(email: string ) { 
      //console.log(email);
      //this.navCtrl.push(TabsPage);
      this.usuario.guardarUsuario(email);
      this.navCtrl.push(TabsPage);

      /*this.navCtrl.push(TabsPage, {
        item : email
      });*/
    }

}
