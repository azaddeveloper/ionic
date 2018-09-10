import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Network } from "@ionic-native/network"
import { CountyPage } from '../pages/county/county';
import { StatePage } from '../pages/state/state';
import { FavoritesPage } from '../pages/favorites/favorites';
import { FederalPage } from '../pages/federal/federal';
// import {ContactDetailPage } from '../pages/contact-detail/contact-detail';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MainService  } from '../services/main';           
 
import { HttpModule } from '@angular/http';                  
      

@NgModule({   
  declarations: [        
    MyApp,    
    CountyPage,  
    StatePage,
    FederalPage,
    // ContactDetailPage,         
    FavoritesPage,
    TabsPage            
  ],
  imports: [
    BrowserModule,
    HttpModule,     
    IonicModule.forRoot(MyApp,{        
      mode:"ios"
    })       
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,   
    CountyPage, 
    StatePage,        
    FederalPage,                      
    // ContactDetailPage,   
    FavoritesPage,    
    TabsPage
  ],
  providers: [        
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MainService,
    Network
  ]     
})           
export class AppModule {}
