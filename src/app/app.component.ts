import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { Scrum } from '../pages/scrum/scrum';
//import { TimeDetails } from '../time/time';

import { Insomnia } from '@ionic-native/insomnia';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Scrum;
  deckcolors =[];
  deckTime = [];
  model:any = {};
  check:any = {};
  pages: Array<{title: string, component: any}>;
  mainPage: any = Scrum;

  autoHide_value:boolean;
  keepScreen_value: boolean;
  insomnia: Insomnia;
  constructor(storage: Storage, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen ) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Scrum', component: Scrum }
    ];

    this.deckcolors = [
        { value: 'white',title: 'White',selected: 'true' },
        { value: 'gainsboro',title: 'Gainsboro',selected: 'false' },
        { value: 'cyan',title: 'Cyan',selected: 'false' },
        { value: 'pink',title: 'Pink',selected: 'false' },
        { value: 'lightgreen',title: 'Light Green',selected: 'false' },
        { value: 'lightyellow',title: 'Light Yellow',selected: 'false' },
        { value: 'lightblue',title: 'Light Blue',selected: 'false' },
    ]

    this.deckTime =[
        { value: '10', title: '10', selected: 'true' },
        { value: '7', title: '7', selected: 'false' },
        { value: '5', title: '5', selected: 'false'},
        { value: '3', title: '3', selected: 'false'},
    ]
    
    // load data to the UI
    this.model.background = localStorage.getItem('backgroundColor'); 
    this.model.duration = localStorage.getItem('duraTion');
    if( localStorage.getItem('autoHide_value') == 'rotateY(180deg)')
        this.autoHide_value = true
    else
        this.autoHide_value = false
    console.log(this.autoHide_value)

    //load screen value to UI
    if( localStorage.getItem('keepScreen_value') == "true")
        this.keepScreen_value = true
    else
        this.keepScreen_value = false
  }       
  changeBackground(){
    var backgroundColor = this.model.background;
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('backgroundColor', backgroundColor);
    } else {
      // using session
    }
    location.reload();
  }
  changeDuration(){
    var duraTion = this.model.duration;
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('duraTion', duraTion);
    } else {
      // using session
    }
    //location.reload();
  }
  autoHide(){
    console.log(this.autoHide_value);
    if (typeof(Storage) !== "undefined") {
      if(this.autoHide_value == true)
        localStorage.setItem('autoHide_value', 'rotateY(180deg)');
      else
        localStorage.setItem('autoHide_value', 'rotateY(0)');
    } else {
      // using session
    }
  }
  keepScreenOn(){
      if (typeof(Storage) !== "undefined") {
        if(this.keepScreen_value == true)
          this.insomnia.keepAwake();
        else {
          this.insomnia.allowSleepAgain();
        }
      } else {
        // using session
      }
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);

  }
}
