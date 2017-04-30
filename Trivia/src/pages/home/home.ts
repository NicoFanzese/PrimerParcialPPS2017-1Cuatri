import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Login } from '../login/login';
//var email = "";
import {Servicio} from '../../providers/servicio';
import {AngularFire, FirebaseListObservable} from 'angularFire2';

import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private resumen= "";
  private pregunta1= "";
  private respuesta1= "";
  private pregunta2= "";
  private respuesta2= "";
  private pregunta3= "";
  private respuesta3= "";

  private acierto = 0;
  private puntajesTraidos;
  private usuarioLogueado;

  puntajes: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuario:Servicio, af: AngularFire, private vibration: Vibration, private nativeAudio: NativeAudio) {
    this.puntajes = af.database.list('/puntajes');
    this.usuarioLogueado = this.usuario.tomarUsuario();
    this.nativeAudio.preloadSimple('Ganador', 'assets/ganador.mp3');
      //.then(function(msg){console.log('Bien: ' + msg)}, function(msg){'Error: ' + msg});
    this.nativeAudio.preloadSimple('Perdedor', 'assets/perdedor.mp3');
      //.then(function(msg){console.log('Bien: ' + msg)}, function(msg){'Error: ' + msg});
    this.nativeAudio.setVolumeForComplexAsset('Ganador', 0.6);
      //.then(function(msg){console.log('Bien: ' + msg)}, function(msg){'Error: ' + msg});
    this.nativeAudio.setVolumeForComplexAsset('Perdedor', 0.6);
      //.then(function(msg){console.log('Bien: ' + msg)}, function(msg){'Error: ' + msg});
  }

  comenzarTrivia() { 
    document.getElementById('Menu').style.display='none'; 
    document.getElementById('Pregunta1').style.display='inline'; 
  }

  pasarApregunta2(respuesta) { 
    //console.log(respuesta);
    this.pregunta1 = "¿En qué año se fue a la B Independiente?:";
    if (respuesta == "unoUno"){    
      this.respuesta1 = "15 de junio de 2013";
      this.resumen += " <b>¿En qué año se fue a la B Independiente?:</b>  15 de junio de 2013<br>" ; 
      this.acierto += 1;       
      this.vibration.vibrate([1000]); 
      //this.nativeAudio.play('nativeAudioGanador');
      this.nativeAudio.play('Ganador');

    }else if (respuesta == "dosUno"){
      this.respuesta1 = "25 de Enero de 2014";
      this.resumen += " <b>¿En qué año se fue a la B Independiente?:</b>  25 de Enero de 2014<br>";          
      //this.nativeAudio.play('nativeAudioPerdedor');
      this.nativeAudio.play('Perdedor');
      this.vibration.vibrate([1000,500,1000]);      
    }else if (respuesta == "tresUno"){
      this.respuesta1 = " 8 de Agosto de 2013";
      this.resumen += " <b>¿En qué año se fue a la B Independiente?:</b>  8 de Agosto de 2013<br>"; 
      //this.nativeAudio.play('nativeAudioPerdedor');                   
      this.nativeAudio.play('Perdedor');
      this.vibration.vibrate([1000,500,1000]);         
    }

    document.getElementById('Pregunta1').style.display='none'; 
    document.getElementById('Pregunta2').style.display='inline';
  }

  pasarApregunta3(respuesta) { 
    this.pregunta2 = "Campeón del Torneo de Primera División Dr. Ramón Carrillo:";
     if (respuesta == "unoDos"){
       this.respuesta2 = "Independiente";
       this.resumen += " <b>Campeón del Torneo de Primera División Dr. Ramón Carrillo:</b> Independiente<br>";
       //this.nativeAudio.play('nativeAudioPerdedor');
       this.nativeAudio.play('Perdedor');
       this.vibration.vibrate([1000,500,1000]);      
     }else if(respuesta == "dosDos"){
       this.respuesta2 = "River";
       this.resumen += " <b>Campeón del Torneo de Primera División Dr. Ramón Carrillo:</b> River<br>";
       //this.nativeAudio.play('nativeAudioPerdedor');
       this.nativeAudio.play('Perdedor');
       this.vibration.vibrate([1000,500,1000]);      
     }else if(respuesta == "tresDos"){
       this.respuesta2 = "Racing";
       this.resumen += " <b>Campeón del Torneo de Primera División Dr. Ramón Carrillo:</b> Racing<br>";
       this.acierto += 1;
       this.vibration.vibrate([1000]);
       //this.nativeAudio.play('nativeAudioGanador');
       this.nativeAudio.play('Ganador');
    }

    document.getElementById('Pregunta2').style.display='none'; 
    document.getElementById('Pregunta3').style.display='inline';
  }

  finalizar(respuesta) { 
    this.pregunta3 = "Jugador que arañó a Abbondanzieri:";
    if (respuesta == "unoTres"){
      this.respuesta3 = "'La Gata' fernandez";
      this.resumen += " <b>Jugador que arañó a Abbondanzieri:</b> 'La Gata' fernandez<br>";           
      //this.nativeAudio.play('nativeAudioPerdedor');
      this.nativeAudio.play('Perdedor');
      this.vibration.vibrate([1000,500,1000]);      
    }else if(respuesta== "dosTres"){
      this.respuesta3 = "'El muñeco' Gallardo";
      this.resumen += " <b>Jugador que arañó a Abbondanzieri:</b> 'El muñeco' Gallardo<br>";
      this.acierto += 1;
      this.vibration.vibrate([1000]);
      //this.nativeAudio.play('nativeAudioGanador');
      this.nativeAudio.play('Ganador');
    }else if(respuesta == "tresTres"){
      this.respuesta3 = "'El Caco' Centurión";
      this.resumen += " <b>Jugador que arañó a Abbondanzieri:</b> 'El Caco' Centurión<br>";
      //this.nativeAudio.play('nativeAudioPerdedor');
      this.nativeAudio.play('Perdedor');
      this.vibration.vibrate([1000,500,1000]);      
  }

    document.getElementById('ResultadoRespuestas').innerHTML = this.resumen; 
    document.getElementById('Total').innerHTML = this.acierto + " / 3";

    document.getElementById('Pregunta3').style.display='none'; 
    document.getElementById('Resultado').style.display='inline';
  }

  jugar() { 
    this.resumen = "";
    this.acierto = 0;
    document.getElementById('Resultado').style.display='none'; 
    document.getElementById('Menu').style.display='inline';
    document.getElementById('UltimosResultados').style.display='none';
  }

  guardar(){
    this.usuario.save(this.usuario.tomarUsuario(),this.resumen, (this.acierto + " / 3"), this.pregunta1, this.pregunta2, this.pregunta3, this.respuesta1, this.respuesta2, this.respuesta3);
    alert("Guardado con éxito");
  }

  verUltimosResultados() { 
   this.puntajes.subscribe(          
      datos => {this.puntajesTraidos = datos},
      Error => console.error(Error),
      () => console.log("todo perfecto")
    )
    //console.log("puntaje traidos en servicio"+this.puntajesTraidos);
    //return localStorage.getItem("Resultados");
    console.log("puntajes traidos en home: "+this.puntajesTraidos);

    document.getElementById('Menu').style.display='none'; 
    document.getElementById('UltimosResultados').style.display='inline';
  }

}
