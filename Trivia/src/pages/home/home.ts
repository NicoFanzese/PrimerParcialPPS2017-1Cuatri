import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
//var email = "";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {
    
  }

  comenzarTrivia() { 
    document.getElementById('Menu').style.display='none'; 
    document.getElementById('Pregunta1').style.display='inline'; 
  }

  pasarApregunta2(respuesta: String) { 
    console.log(respuesta);
    document.getElementById('Pregunta1').style.display='none'; 
    document.getElementById('Pregunta2').style.display='inline';
  }

  pasarApregunta3(respuesta: String) { 
    document.getElementById('Pregunta2').style.display='none'; 
    document.getElementById('Pregunta3').style.display='inline';
  }

  finalizar(respuesta: String) { 
    document.getElementById('Pregunta3').style.display='none'; 
    document.getElementById('Resultado').style.display='inline';
  }

  jugar() { 
    document.getElementById('Resultado').style.display='none'; 
    document.getElementById('Menu').style.display='inline';
  }

  verUltimosResultados() { 
    document.getElementById('Menu').style.display='none'; 
    document.getElementById('UltimosResultados').style.display='inline';
  }
}
