import { Component } from '@angular/core';
import { Platform,LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 

import { TabsPage } from '../pages/tabs/tabs';

declare const $:any;    
 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
 private loader: any;
  

  constructor(public loadingCtrl: LoadingController,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.getContactsList();
    });
  }
  getContactsList(){ 
   let connection= navigator.onLine;
   if(connection){
     $.ajax({
      type: "get",
      url: "https://apps.wv.gov/pai/cjtf/api/contacts/?format=json",
      processData: false,   
      dataType: 'jsonp',
    beforeSend: ()=> {
      this.showSpinner();
      },
      success:(json) => {   
        localStorage.removeItem("wp-help-json");
        localStorage.setItem("wp-help-json",JSON.stringify(json));
        this.hideSpinner();         
      },
      error:(data) => {   
        console.log("something went wrong");
        this.hideSpinner();          
      }
    }); 
   }else{
     console.log("offline");
     this.hideSpinner();   
   }            
                   
  }      
   showSpinner() {
    if (!this.loader) {
      this.loader = this.loadingCtrl.create({
        content: "Checking for Update.....Please wait!",
      });
      this.loader.present();
    }
  }

   hideSpinner() {
    if (this.loader) {
      this.loader.dismiss().catch(() => {});
      this.loader = null;
    }
  }
}
