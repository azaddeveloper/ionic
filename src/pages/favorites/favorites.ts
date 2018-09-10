import { Component, OnInit } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import {ContactDetailPage } from '../contact-detail/contact-detail';
import * as _ from 'lodash';
 

// @IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage  implements OnInit {
  favoritesArray:any = [];
  headerIndexArray:any=[];
  constructor(public navCtrl: NavController) {
      if(location.hash){
        console.log("Hash present");
        // location.href='https://wvhelp-d15cb.firebaseapp.com/';
      }
  }
  ionViewDidEnter(){
    this.loadfavorites();
  }
  ngOnInit(){
    
  }
  openContact(value) {
    this.navCtrl.push("ContactDetailPage",{contactArray : value});
  }
  loadfavorites(){
   let   json_array =JSON.parse(localStorage.getItem('wv-help-favorites-array'));  
   if(json_array !=  null){
   let  sorted_array=  _.orderBy(json_array,'groupName','asc'); 
   let getIndex = _.groupBy(sorted_array,'groupName');      
   this.favoritesArray =_.values(getIndex); 
   this.headerIndexArray=_.keys(getIndex);                     
   }  
   console.log("fav"+this.favoritesArray);
   
  }
}
         