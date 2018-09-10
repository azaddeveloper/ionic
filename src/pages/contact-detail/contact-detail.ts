import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';
// import { FavoritesPage } from '../favorites/favorites';
import { TabsPage } from '../tabs/tabs';


 

    
/**
 * Generated class for the ContactDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({ 
  selector: 'page-contact-detail',             
  templateUrl: 'contact-detail.html',
})
export class ContactDetailPage {
  favorite=false;
  favoritesArray:any=[];
  contactPhoneNumber=false;
  contactFaxNumber=false;
  contactMailingStreet1=false;
  contactMailingStreet2=false;
  contactPhysicalStreet1=false;
  contactPhysicalStreet2=false;
  contactArray:any=[];
  contactValue_contactId =""; 
  contactValue_contactName =""; 
  contactValue_groupName ="";
  contactValue_phoneNumber="";   
  contactValue_faxNumber =""; 
  contactValue_mailingStreet1 =""; 
  contactValue_mailingStreet2 =""; 
  contactValue_mailingCity  ="";
  contactValue_mailingState  ="";
  contactValue_mailingZip  ="";
  contactValue_physicalStreet1 =""; 
  contactValue_physicalStreet2 =""; 
  contactValue_physicalCity  ="";    
  contactValue_physicalState =""; 
  contactValue_physicalZip  ="";
  contactValue_modified  ="";
  contactValue_isDeleted  ="";
 sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(this.contactValue_physicalStreet1);
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private sanitizer:DomSanitizer,public platform:Platform) {
    this.contactArray=JSON.stringify(this.navParams.get("contactArray")); 
    if(!this.contactArray || this.contactArray == ''){
      console.log("direct load123");
    
       this.navCtrl.setRoot(TabsPage)    //
       
    }else{
      this.loadContactDetails();
    }    
     
  }
      
  ionViewDidLoad() {
     
  }
   
             
  setfavorite(value){ 
    if(this.favoritesArray.length > 0){
     console.log(value);
    if(value == 'yes'){
      this.favorite=true; 
      this.favoritesArray.push(this.navParams.get("contactArray"));
      console.log("set fav")
    }else{
      // this.favorite=false; 
      this.favoritesArray.forEach((element,index) => {
       if(element.contactId == this.contactValue_contactId && element.groupName == this.contactValue_groupName){  
        this.favorite=false;     
         console.log("set unfav");
          this.favoritesArray.splice(index, 1)
         }
    });
            
    }
     localStorage.setItem("wv-help-favorites-array",JSON.stringify(this.favoritesArray)); 
      
    }else{
        console.log("first array");   
         this.favoritesArray.push(this.navParams.get("contactArray"));
          localStorage.setItem("wv-help-favorites-array",JSON.stringify(this.favoritesArray));  
          this.favorite=true;   
    }      
    
  }
  loadContactDetails(){
    let array =JSON.parse(this.contactArray);
    // console.log(array);
    this.contactValue_contactId = array.contactId; 
    this.contactValue_contactName = array.contactName; 
    this.contactValue_groupName =   array.groupName; 
    this.contactValue_phoneNumber =array.phoneNumber;  
    this.contactValue_faxNumber = array.faxNumber; 
    this.contactValue_mailingStreet1 = array.mailingStreet1; 
    this.contactValue_mailingStreet2 = array.mailingStreet2; 
    this.contactValue_mailingCity  =array.mailingCity;
    this.contactValue_mailingState  =array.mailingState;
    this.contactValue_mailingZip  =array.mailingZip;
    this.contactValue_physicalStreet1 = array.physicalStreet1; 
    this.contactValue_physicalStreet2 = array.physicalStreet2; 
    this.contactValue_physicalCity  =array.physicalCity;
    this.contactValue_physicalState = array.physicalState; 
    this.contactValue_physicalZip  =array.physicalZip;
    this.contactValue_modified  =array.modified;
    this.contactValue_isDeleted  =array.isDeleted;
    
    if(array.phoneNumber != 'undefined' || array.phoneNumber  != ''){
      this.contactPhoneNumber=true;        
    }
    if(array.faxNumber != undefined){
        this.contactFaxNumber=true;
    }
    if(array.mailingStreet1 != undefined){
      this.contactMailingStreet1=true;
    }
    if(array.mailingStreet2 != undefined){
      this.contactMailingStreet2=true;
    }
    if(array.physicalStreet1 != undefined){
      this.contactPhysicalStreet1=true;
    }
    if(array.physicalStreet2 != undefined){
      this.contactPhysicalStreet2=true;
    }

      let localStorage_length=localStorage.getItem("wv-help-favorites-array");
      if(localStorage_length !=  null){
        this.favoritesArray=JSON.parse(localStorage_length);
      }
  //   this.favoritesArray=);
    this.favoritesArray.forEach(element => {
     if(element.contactId == this.contactValue_contactId && element.groupName == this.contactValue_groupName ){  
       this.favorite=true;   
      }
  }); 
    
  }
  openMap(){
    let destination =this.contactValue_physicalStreet1+'+'+ this.contactValue_physicalCity +'+'+this.contactValue_physicalZip;
    
      console.log(destination);
      if(this.platform.is('ios')){
        window.open('maps://?q=' + destination,'_system');
      } else {
        // window.open('geo:0,0?q=' + destination,'_system');
        window.open('https://www.google.com/maps/search/?api=1&query='+destination +' ');
        
      }
}
       

}
