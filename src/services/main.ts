// import { HttpClient, HttpHeaders, } from '@angular/common/http';
// import { Http,Headers, RequestOptions, URLSearchParams } from '@angular/http';
// import {HttpClient} from '@angular/common/http';
// import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
import { Observable } from 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers} from '@angular/http';

// mobile native features
// import { Network } from "@ionic-native/network"

import { ToastController, LoadingController,Events } from 'ionic-angular';

/*
  Generated class for the TaskServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

// URLS
let getContactURL = 'https://apps.wv.gov/pai/cjtf/api/contacts?format=json';


declare let type: any;


@Injectable()
export class MainService {


  constructor(public http: Http,
     public loadingCtrl: LoadingController,private event:Events) {
      
  }

           
 
  

  // Project task detail
  getContactList(){
 
  }  
// http request errors
handleError(error) {
  console.error(" taskservice error "+error);
  return Observable.throw(error.json().error || 'Server error');
}


 

}
