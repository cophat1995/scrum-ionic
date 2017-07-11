import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { Scrum } from '../pages/scrum/scrum';
import { ScrumDetails } from '../pages/scrum-details/scrum-details';
import { TimeDetails } from '../pages/time/time';

import { Insomnia } from '@ionic-native/insomnia';

@NgModule({
  declarations: [
    MyApp,
    Scrum,
    ScrumDetails,
    TimeDetails,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Scrum,
    ScrumDetails,
    TimeDetails,
  ],
  providers: [
    Insomnia,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
