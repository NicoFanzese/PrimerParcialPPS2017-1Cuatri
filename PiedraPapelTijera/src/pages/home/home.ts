import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Login } from '../login/login';
//var email = "";
import {Servicio} from '../../providers/servicio';


type ArrayJuego = Array<{id: number, text: string, imagen: string}>;

var arr: ArrayJuego = [
    {id: 1, text: 'Piedra', imagen: ''},
    {id: 2, text: 'Papel', imagen: ''},
    {id: 3, text: 'Tijera', imagen: ''},
];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  private usuarioLogueado;
  private elegidoRandom;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuario:Servicio) {
    this.usuarioLogueado = this.usuario.tomarUsuario();
    console.log("esto es el servicio papá ");
  }


  jugar() { 
    document.getElementById('PiedraPapelTijera').style.display='none'; 
    document.getElementById('Menu').style.display='inline';
    document.getElementById('UltimosResultados').style.display='none';
  }

  verUltimosResultados() { 
  /* this.puntajes.subscribe(          
      datos => {this.puntajesTraidos = datos},
      Error => console.error(Error),
      () => console.log("todo perfecto")
    )*/
    //console.log("puntaje traidos en servicio"+this.puntajesTraidos);
    //return localStorage.getItem("Resultados");
    //console.log("puntajes traidos en home: "+this.puntajesTraidos);
    document.getElementById('PiedraPapelTijera').style.display='none'; 
    document.getElementById('Menu').style.display='none'; 
    document.getElementById('UltimosResultados').style.display='inline';
  }

  comenzar() { 
    document.getElementById('Menu').style.display='none'; 
    document.getElementById('PiedraPapelTijera').style.display='inline'; 
    document.getElementById('UltimosResultados').style.display='none';
  }



    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generar = function(eligio: string) {
        this.elegidoRandom = this.getRandomInt(1, 3);

        if (this.elegidoRandom == 1){
          if(eligio == "piedra"){
            alert("Empate!");
          }else if(eligio == "papel"){
            alert("Usted Gana, Felicitaciones!");
          }else if(eligio == "tijera"){
            alert("Usted Pierde, =(");
          }
          document.getElementById('piedraOperador').style.display='inline';
          document.getElementById('papelOperador').style.display='none';
          document.getElementById('tijeraOperador').style.display='none';
        }else if (this.elegidoRandom == 2){
          if(eligio == "piedra"){
            alert("Usted Pierde, =(");            
          }else if(eligio == "papel"){
            alert("Empate!");            
          }else if(eligio == "tijera"){
            alert("Usted Gana, Felicitaciones!");
          }
          document.getElementById('piedraOperador').style.display='none';
          document.getElementById('papelOperador').style.display='inline';          
          document.getElementById('tijeraOperador').style.display='none';
        }else if (this.elegidoRandom == 3){
          if(eligio == "piedra"){
            alert("Usted Gana, Felicitaciones!"); 
          }else if(eligio == "papel"){
            alert("Usted Pierde, =(");                       
          }else if(eligio == "tijera"){
            alert("Empate!");                                    
          }
          document.getElementById('piedraOperador').style.display='none';
          document.getElementById('papelOperador').style.display='none';          
          document.getElementById('tijeraOperador').style.display='inline';
        }
    }




}
