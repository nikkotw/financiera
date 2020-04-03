import { Component } from '@angular/core';
//import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
//import { NavController } from '@ionic/angular';
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

 constructor(private router :Router) {

    firebase.auth().useDeviceLanguage();

     
  } 
  ionViewDidLoad() {
    
  }
opcion(option){
  let pass = option;
  firebase.auth().onAuthStateChanged(user=> {
    if (user) {
       //this.navCtrl.navigateForward("/registro/"+${option}); 
      this.router.navigate(['/registro',  pass]);
    } else {
      //this.navCtrl.navigateForward(['/sms',option]); 
      this.router.navigate(['/sms',  pass]);
    }
  });
}
}


