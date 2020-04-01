import { Component } from '@angular/core';
//import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
//import {AngularFireModule } from '@angular/fire'




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  applicationVerifier;
 constructor(private navCtrl:NavController,) {
    
    firebase.auth().useDeviceLanguage();
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
      } else {
        
        console.log("tamo Jodido");
      }
    });
    
   /* this.firebaseAuthentication.onAuthStateChanged().subscribe((user)=>{
      if(user){
        alert("usuario Autenticado");
      }
      else{
        console.log("no Autenticado")
      }
    });*/

    
    //this.router.navigate(['/registro']);
 
 
 
  } 
  ionViewDidLoad() {
    
  }

}


