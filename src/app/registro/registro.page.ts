import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {  NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
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
  opcion;
  titulo;
  applicationVerifier;
  httpOptions;
  
  constructor(navCtrl:NavController,private router:Router, public activatedRoute:ActivatedRoute, private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
  
   }

  ngOnInit() {
    this.opcion = this.activatedRoute.snapshot.paramMap.get('option');
    if(this.opcion==1){
      this.titulo="Solicitar Prestamo";
    }
    if(this.opcion==2){
      this.titulo="Pagar Mi Cuota";
    }
    if(this.opcion==3){
      this.titulo="Otras Gestiones";
    }
  }


  returnBack(){
    this.router.navigate(['home']);
  }

  enviaDatos(){

    this.http.post('http://localhost/php/mail.php',{nombre:this.nombreAp,telefono:this.celular,email:this.email,dni:this.DNI},this.httpOptions).toPromise().then(data =>{
      console.log(data);
    }).catch(error =>{
      console.log(error);
    });


    }

}
