import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFire, FirebaseListObservable} from 'angularFire2';

/*
  Generated class for the Servicio provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Servicio {  

  constructor() {
    //console.log('Hello Servicio Provider');
  }

  public guardarUsuario(nombre : string) {
    localStorage.setItem("Nombre",nombre);
  }

  public tomarUsuario = function(){    
    return localStorage.getItem("Nombre");
  }
}
