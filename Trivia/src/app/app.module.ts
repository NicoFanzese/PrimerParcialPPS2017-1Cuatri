import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {Servicio} from '../providers/servicio';
import {AngularFireModule} from 'angularFire2';


export const firebaseConfig = {
    apiKey: "AIzaSyDvX-vJu5H2-BRXlu6ZRy2PAJpeKVDyAxU",
    authDomain: "triviautn.firebaseapp.com",
    databaseURL: "https://triviautn.firebaseio.com",
    projectId: "triviautn",
    storageBucket: "triviautn.appspot.com",
    messagingSenderId: "547111251599"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Servicio,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
