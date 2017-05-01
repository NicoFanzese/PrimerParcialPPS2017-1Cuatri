import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Login } from '../login/login';
//var email = "";
import {Servicio} from '../../providers/servicio';
import {AngularFire, FirebaseListObservable} from 'angularFire2';

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
  private fecha = Date.now();
/*
  private dia = this.fecha.getDate();
  private mes = this.fecha.getMonth();
  private anio = this.fecha.getFullYear();*/

  private juegosTraidos;
  private AuxjuegosTraidos;
  private auxJuego;
  private resultado;

  juegos: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuario:Servicio, af: AngularFire) {
    this.juegos = af.database.list('/juegos');
    this.usuarioLogueado = this.usuario.tomarUsuario();
    console.log("esto es el servicio papá ");
  }


  jugar() { 
    document.getElementById('PiedraPapelTijera').style.display='none'; 
    document.getElementById('Menu').style.display='inline';
    document.getElementById('UltimosResultados').style.display='none';
  }

  verUltimosResultados() { 
    document.getElementById('PiedraPapelTijera').style.display='none'; 
    document.getElementById('Menu').style.display='none'; 
    document.getElementById('UltimosResultados').style.display='inline';
  }

  filtrarResultados() { 
    console.log("resultado: "+this.resultado);
    this.juegos.subscribe(          
        datos => {this.juegosTraidos = datos},
        Error => console.error(Error),
        () => console.log("todo perfecto")
      )
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
            this.usuario.save(this.usuarioLogueado, "Piedra", "Piedra", "Empate", this.fecha);
            alert("Empate!");            
          }else if(eligio == "papel"){
            this.usuario.save(this.usuarioLogueado, "Piedra", "Papel", "Gana", this.fecha);
            alert("Usted Gana, Felicitaciones!");
          }else if(eligio == "tijera"){
            this.usuario.save(this.usuarioLogueado, "Piedra", "Tijera", "Pierde", this.fecha);
            alert("Usted Pierde, =(");
          }
          document.getElementById('piedraOperador').style.display='inline';
          document.getElementById('papelOperador').style.display='none';
          document.getElementById('tijeraOperador').style.display='none';
        }else if (this.elegidoRandom == 2){
          if(eligio == "piedra"){
            this.usuario.save(this.usuarioLogueado, "Papel", "Piedra", "Pierde", this.fecha);
            alert("Usted Pierde, =(");            
          }else if(eligio == "papel"){
            this.usuario.save(this.usuarioLogueado, "Papel", "Papel", "Empate", this.fecha);
            alert("Empate!");            
          }else if(eligio == "tijera"){
            this.usuario.save(this.usuarioLogueado, "Papel", "Tijera", "Gana", this.fecha);
            alert("Usted Gana, Felicitaciones!");
          }
          document.getElementById('piedraOperador').style.display='none';
          document.getElementById('papelOperador').style.display='inline';          
          document.getElementById('tijeraOperador').style.display='none';
        }else if (this.elegidoRandom == 3){
          if(eligio == "piedra"){
            this.usuario.save(this.usuarioLogueado, "Tijera", "Piedra", "Gana", this.fecha);
            alert("Usted Gana, Felicitaciones!"); 
          }else if(eligio == "papel"){
            this.usuario.save(this.usuarioLogueado, "Tijera", "Papel", "Pierde", this.fecha);
            alert("Usted Pierde, =(");                       
          }else if(eligio == "tijera"){
            this.usuario.save(this.usuarioLogueado, "Tijera", "Tijera", "Empate", this.fecha);
            alert("Empate!");                                    
          }
          document.getElementById('piedraOperador').style.display='none';
          document.getElementById('papelOperador').style.display='none';          
          document.getElementById('tijeraOperador').style.display='inline';
        }
    }

}
