import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { Scrum } from '../pages/scrum/scrum';
//import { TimeDetails } from '../time/time';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Scrum;
  sequences =[];
  deckcolors =[];
  deckTime = [];
  model:any = {};
  check:any = {};
  pages: Array<{title: string, component: any}>;
  mainPage: any = Scrum;

  autoHide_value:boolean;
  constructor(storage: Storage, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,) {
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Scrum', component: Scrum }
    ];

    this.sequences = [
        { value: 'planing-pocker',title: 'Plaining Pocker',selected: 'true' },
        { value: 'fibonaci',title: 'Fibonaci',selected: 'false' },
        { value: 'natural',title: 'Natural',selected: 'false' },
        { value: 't-shirt',title: 'T-Shirt',selected: 'false' }
    ]

    this.deckcolors = [
        { value: 'white',title: 'White',selected: 'true' },
        { value: 'gray',title: 'Gray',selected: 'false' },
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
    ]
    
    // load data to the UI
    this.model.sequence = localStorage.getItem('sequenceType');
    this.model.background = localStorage.getItem('backgroundColor'); 
    this.model.duration = localStorage.getItem('duraTion');
    if( localStorage.getItem('autoHide_value') == 'rotateY(180deg)')
        this.autoHide_value = true
    else
        this.autoHide_value = false
    console.log('value auto: ' + this.autoHide_value)
  }       

  changeSequence(){
    var sequenceType = this.model.sequence;
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem('sequenceType', sequenceType);
    } else {
      // using session
    }
    location.reload();
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
    location.reload();
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
  keppScreenOn(){
    
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
