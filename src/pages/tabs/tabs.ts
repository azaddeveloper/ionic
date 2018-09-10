import { Component } from '@angular/core';

import { Events } from 'ionic-angular';
import { CountyPage } from '../county/county';
import { StatePage } from '../state/state';
import { FavoritesPage} from '../favorites/favorites';
import { FederalPage  } from '../federal/federal';
 
import { ViewChild } from '@angular/core'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef;
  tab1Root = FavoritesPage;
  tab2Root = CountyPage;  
  tab3Root = StatePage;   
  tab4Root = FederalPage;   

  constructor(public event:Events) {
     
//   this.event.subscribe('invalid_token',()=>{
     
//     console.log("asdfsdfsdfsdfsdf");
// });

    console.log("new valuefffffffffffffffffffffffffffffffffffffffffffffff");
    

  }
  ionViewDidEnter() {
       if(localStorage.getItem('setIndex')){
        this.tabRef.select(1);
        localStorage.removeItem('setIndex')

       }
    
   }



 

  public onTabsChange() {
    // let selectedTab = this.tabRef.getSelected();
    // console.log(selectedTab.index + ' - ' + selectedTab.tabTitle);
  }
}
