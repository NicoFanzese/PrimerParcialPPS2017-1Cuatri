import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import {Servicio} from '../../providers/servicio';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public email = "";

  tab1Root = HomePage;
  tab2Root = AboutPage;
  //tab3Root = ContactPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuario:Servicio) {
    this.navCtrl = navCtrl;
    /*console.log("estoy en tabs:" + this.navParams.get('item'));
    email = this.navParams.get('item'); */
    this.email = usuario.tomarUsuario();
  }
}