import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Components
import { TabsPage } from '../pages/tabs/tabs';
import { PendingComponent } from "../pages/pending/pending.component";
import { FinishedComponent } from "../pages/finished/finished.component";

//services
import { wishService } from "../services/wish.service";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingComponent,
    FinishedComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingComponent,
    FinishedComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    wishService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
