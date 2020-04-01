import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';

 
firebase.initializeApp(     {
  apiKey: "AIzaSyD7Mi41CL4c74l4Jj62I7INNdZfg_I4mbU",
  authDomain: "credipago-ba353.firebaseapp.com",
  databaseURL: "https://credipago-ba353.firebaseio.com",
  projectId: "credipago-ba353",
  storageBucket: "credipago-ba353.appspot.com",
  messagingSenderId: "941620020857",
  appId: "1:941620020857:web:11e9e19048bacfa79eb6a8"
  });
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
  
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
