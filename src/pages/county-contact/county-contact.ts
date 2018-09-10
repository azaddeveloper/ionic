import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import * as _ from 'lodash';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the CountyContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-county-contact',
  templateUrl: 'county-contact.html',
})
export class CountyContactPage {
  countyContactArray:any=[];
  countyName:string='';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.countyName=this.navParams.get("contactArray");
    // this.countyName=localStorage.getItem('wp-help-county-name'); 
         console.log(this.countyName);
    if(!this.countyName || this.countyName == ''){
      console.log("direct load1233333");
      localStorage.setItem('setIndex','1');
      localStorage.setItem('load-county','1');
     
        this.navCtrl.setRoot(TabsPage)    //
    }      
          
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountyContactPage');
    this.loadContacts();
  }
  loadContacts(){
  let  json_array =JSON.parse(localStorage.getItem('wp-help-json'));   
 if(json_array !=  null){
   json_array.forEach(element => {
       if(element.groupName == this.countyName){    
         this.countyContactArray.push(element);  
       }  
    }); 
      
         
   }  
           
  }
  openContact(value) {  
    this.navCtrl.push("ContactDetailPage",{contactArray : value});
  }

}
