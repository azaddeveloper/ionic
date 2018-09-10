import { Component } from '@angular/core';
import { NavController,IonicPage } from 'ionic-angular';
//  @IonicPage()
@Component({
  selector: 'page-federal',
  templateUrl: 'federal.html'
})
export class FederalPage {
  federalArray :any=[];
  constructor(public navCtrl: NavController) {
    this.onloadFederal();
  }

  openContact(value) {
    this.navCtrl.push("ContactDetailPage",{contactArray : value});
  }
  onloadFederal(){
    let json_array =JSON.parse(localStorage.getItem('wp-help-json'));
    json_array.forEach(element => {
       if(element.groupName == 'Federal'){
        this.federalArray.push(element);
       }  
    });
  } 
  
  

}    
