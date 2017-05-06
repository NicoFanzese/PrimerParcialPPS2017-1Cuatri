import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Login } from '../login/login';
import {Servicio} from '../../providers/servicio';

import {Vibration } from '@ionic-native/vibration';
import {NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public vibration: Vibration, public nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('Vaca', 'assets/audios/vaca.mp3');
    this.nativeAudio.preloadSimple('Grillo', 'assets/audios/grillo.mp3');
    this.nativeAudio.preloadSimple('Cardenal', 'assets/audios/cardenal.mp3');
    this.nativeAudio.preloadSimple('Oveja', 'assets/audios/oveja.mp3');
  }

  vaca(){
    this.nativeAudio.play('Vaca');
    this.vibration.vibrate([1000]);
  }
  grillo(){
    this.nativeAudio.play('Vaca');
    this.vibration.vibrate([1000]);
  }
  cardenal(){
    this.nativeAudio.play('Cardenal');
    this.vibration.vibrate([1000]);
  }
  oveja(){
    this.nativeAudio.play('Oveja');
    this.vibration.vibrate([1000]);
  }

}
