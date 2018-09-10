import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
// import {ContactDetailPage } from '../contact-detail/contact-detail';
// @IonicPage()
@Component({
  selector: 'page-state',
  templateUrl: 'state.html'
})
export class StatePage {
   stateArray :any=[];
   constructor(public navCtrl: NavController) {
    this.onloadstate();
   
  }
  openContact(value) {  
    this.navCtrl.push("ContactDetailPage",{contactArray : value});
  }
  onloadstate(){
    let json_array =JSON.parse(localStorage.getItem('wp-help-json'));
    json_array.forEach(element => {
       if(element.groupName == 'State'){
        this.stateArray.push(element);
       }  
    });
  } 
}
   