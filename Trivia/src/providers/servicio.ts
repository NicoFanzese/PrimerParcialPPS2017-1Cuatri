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
  puntajes: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.puntajes = af.database.list('/puntajes');
  }

  public guardarUsuario(nombre : string) {
    localStorage.setItem("Nombre",nombre);
  }

  public tomarUsuario = function(){    
    return localStorage.getItem("Nombre");
  }
    
  save(Usu:string, Res: string, pun: string, pre1: string, pre2: string, pre3: string, res1: string, res2: string, res3: string) {
    this.puntajes.push({ Usuario: Usu,
                        Respuestas: Res,
                        Puntaje: pun,
                        pregunta1: pre1,
                        pregunta2: pre2,
                        pregunta3: pre3,
                        respuesta1: res1,
                        respuesta2: res2,
                        respuesta3: res3});
  }

}

