import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sms',
  templateUrl: './sms.page.html',
  styleUrls: ['./sms.page.scss'],
})
export class SmsPage implements OnInit {
  opcion;
  celular;
  applicationVerifier;
  valida=false;
  codigo=false;
  credencial;
  codigoVerificador:string;
  code1;
  code2;
  code3;
  code4;
  code5;
  code6;
 
  constructor(private navCtrl:NavController,private activatedRoute:ActivatedRoute ,private router:Router) { }

  ngOnInit() {
    this.opcion =this.opcion = this.activatedRoute.snapshot.paramMap.get('option');
  }
  returnBack(){
    this.navCtrl.back();
  }

 phoneAuth(){
    console.log("PhoneAuth");
    console.log(this.applicationVerifier); 
    this.applicationVerifier =new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible'
    });
    console.log(this.applicationVerifier.s.c);
    this.celuVerification();

    
  }


  celuVerification(){
    
    console.log("verificamos");
    
    let numeroTelefono="+54"+this.celular;
    console.log(numeroTelefono);

       let sendSms= new firebase.auth.PhoneAuthProvider().verifyPhoneNumber( numeroTelefono,this.applicationVerifier).then(credential=>{
          console.log(credential);
          this.credencial = credential;
          this.valida=true;
        }).catch(error =>{

            alert("El numero de telefono fue mal ingresado");
            console.log(error);
        });

  }

  singInWhitCode(){
    console.log("llega");
    this.codigoVerificador= this.code1 + this.code2 + this.code3 + this.code4 +this.code5 +this.code6;
    console.log(this.codigoVerificador);
    let credenciales = firebase.auth.PhoneAuthProvider.credential(this.credencial,this.codigoVerificador);
    firebase.auth().signInWithCredential(credenciales).then(rta =>{
     
    }).catch(error =>{
    
        console.log("el error  es:"+error.code);
    })

   /*this.firebaseAuthentication.signInWithVerificationId(this.verificationID,this.code).then(info =>{
     console.log(info);
   }).catch(error =>{
      console.log(error);
   }) */

 }
}
