import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {  NavController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  verificationID:string = "";
  credencial;
  nombreAp;
  celular;
  DNI;
  email;

  registro=false;
  valida=true;
  lastPage=false;
  homePage=true;

  codigo=false;
  captcha=false;

  codigoVerificador;
  errores=false;
  mensage:string;
  applicationVerifier;
    actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: 'localhost',
      // This must be true.
      handleCodeInApp: true,
      android: {
        packageName: 'com.nikkotw.credipago',
        installApp: true,
        minimumVersion: '12'
      },
      dynamicLinkDomain: 'https://nikkotw.page.link/RtQw'
    }
  
  constructor(navCtrl:NavController) { }

  ngOnInit() {
  }


async phoneAuth(){
    console.log("PhoneAuth");
    this.captcha=true;    
    this.applicationVerifier = await new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible'
    });
    console.log(this.applicationVerifier.s.c);
    this.celuVerification();
    /*
    let test = await applicationVerifier.render().then(f =>{
      console.log("esto es f"+f);
       ;
    });*/
    
  }


  celuVerification(){
    console.log("verificamos");
    this.valida=false;
    this.codigo=true;
    let numeroTelefono="+54"+this.celular;


   // let applicationVerifier =  new firebase.auth.RecaptchaVerifier('recaptcha-container');
    /*
       let test = await applicationVerifier.render().then(f =>{
         console.log("esto es f"+f);
          ;
       });*/
      
       let sendSms= new firebase.auth.PhoneAuthProvider().verifyPhoneNumber( numeroTelefono,this.applicationVerifier).then(credential=>{
          console.log(credential);
          this.credencial = credential;
          this.errores=false;
        }).catch(error =>{
        
            console.log();
            this.mensage=error.code;
        });
   /* firebase.auth().signInWithPhoneNumber(numeroTelefono, this.applicationVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      this.credencial = confirmationResult;
    }).catch(function (error) {
      // Error; SMS not sent
      // ...
      
      console.log("sms NOT SEND")
      console.log(error)
    });*/
   /* 
    console.log("estos el numero:"+numeroTelefono);
    let sendSms= firebase.auth().signInWithPhoneNumber(numeroTelefono,this.applicationVerifier).then(credential=>{
       console.log(credential);
       this.credencial = credential;
       this.errores=false;
     }).catch(error =>{
       this.codigo=false;
         console.log(error);
         this.mensage=error.code;
     });
     */
    /*
     (<any>window).FirebasePlugin.verifyPhoneNumber('+5402804683426',500,(credential) => {
       alert("Codigo Enviado Correctamente");
       console.log(credential);
       this.credencial = credential;
     
     });
     */
    /*this.firebaseAuthentication.verifyPhoneNumber("+502804683426",3000).then((verificationID)=>{
      console.log(verificationID);
      this.verificationID=verificationID;
    }).catch(error =>{
       console.log(error);
    })*/
  }

  singInWhitCode(){
  
    let credenciales = firebase.auth.PhoneAuthProvider.credential(this.credencial,this.codigoVerificador);
    firebase.auth().signInWithCredential(credenciales).then(rta =>{
      console.log("acceso Exitoso");
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
