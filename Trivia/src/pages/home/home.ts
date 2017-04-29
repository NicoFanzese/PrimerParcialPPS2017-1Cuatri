import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
//var email = "";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private resumen= "";
  private acierto = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log("estoy en home" + this.navParams.get('item'));
  }

  comenzarTrivia() { 
    document.getElementById('Menu').style.display='none'; 
    document.getElementById('Pregunta1').style.display='inline'; 
  }

  pasarApregunta2(respuesta) { 
    //console.log(respuesta);

    if (respuesta == "unoUno"){
          this.resumen += " <b>¿En qué año se fue a la B Independiente?: </b> 15 de junio de 2013<br>" ; 
          this.acierto += 1;        
       }else if (respuesta == "dosUno"){
          this.resumen += " <b>¿En qué año se fue a la B Independiente?: </b> 25 de Enero de 2014<br>";          
       }else if (respuesta == "tresUno"){
          this.resumen += " <b>¿En qué año se fue a la B Independiente?: </b> 8 de Agosto de 2013<br>";                    
    }

    document.getElementById('Pregunta1').style.display='none'; 
    document.getElementById('Pregunta2').style.display='inline';
  }

  pasarApregunta3(respuesta) { 
     if (respuesta == "unoDos"){
           this.resumen += " <b>Campeón del Torneo de Primera División Dr. Ramón Carrillo: </b> Independiente<br>";
        }else if(respuesta == "dosDos"){
           this.resumen += " <b>Campeón del Torneo de Primera División Dr. Ramón Carrillo: </b> River<br>";
        }else if(respuesta == "tresDos"){
           this.resumen += " <b>Campeón del Torneo de Primera División Dr. Ramón Carrillo: </b> Racing<br>";
           this.acierto += 1;
      }

    document.getElementById('Pregunta2').style.display='none'; 
    document.getElementById('Pregunta3').style.display='inline';
  }

  finalizar(respuesta) { 
    if (respuesta == "unoTres"){
           this.resumen += " <b>Jugador que arañó a Abbondanzieri: </b> 'La Gata' fernandez<br>";           
        }else if(respuesta== "dosTres"){
           this.resumen += " <b>Jugador que arañó a Abbondanzieri: </b> 'El muñeco' Gallardo<br>";
           this.acierto += 1;
        }else if(respuesta == "tresTres"){
           this.resumen += " <b>Jugador que arañó a Abbondanzieri: </b> 'El Caco' Centurión<br>";
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
  }

  verUltimosResultados() { 
    document.getElementById('Menu').style.display='none'; 
    document.getElementById('UltimosResultados').style.display='inline';
  }
}
