import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
import { CountyContactPage } from '../county-contact/county-contact';
import * as _ from 'lodash';

// @IonicPage()
@Component({
  selector: 'page-county',
  templateUrl: 'county.html'
})
export class CountyPage {
  countyArray:any=[];
  constructor(public navCtrl: NavController) {
    if(localStorage.getItem('load-county')){
      this.navCtrl.push("CountyContactPage",{contactArray : JSON.parse( localStorage.getItem('county-name'))},{animate: false});
      localStorage.removeItem('county-value');
      localStorage.removeItem('load-county');
      

     }  
  }
  ionViewDidEnter(){                      
    console.log("Event fired");       
    this.loadcounty();  
  }
   
  
             
  loadcounty(){
    let  json_array =JSON.parse(localStorage.getItem('wp-help-json'));   
    if(json_array !=  null){
      let  sorted_array= _.orderBy(json_array,'groupName','asc');  
     let getIndex = _.groupBy(sorted_array,'groupName');      
     this.countyArray=_.keys(getIndex);  
     this.countyArray= _.orderBy(this.countyArray,'asc');
    }              
    
   }
   getCountyContact(value){
  //   let  json_array =localStorage.getItem('wp-help-county-name');   
  //   if(json_array !=  null){
  //            localStorage.removeItem('wp-help-county-name');
  //            localStorage.setItem('wp-help-county-name',JSON.stringify(value));
  //   }else{
  //     localStorage.setItem('wp-help-county-name',JSON.stringify(value));
  //   }    
  //   this.navCtrl.push("CountyContactPage");
  //  }
  localStorage.setItem('county-name',JSON.stringify(value));     
  this.navCtrl.push("CountyContactPage",{contactArray :value});
   }
}
