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
import { AddListComponent } from "../pages/addList/addList.component";
import { ListsComponent } from './components/lists.components';

//services
import { wishesService } from "../services/wishes.service";


//pipes
import { CompletedFilterPipe } from "../pipes/completed-filter/completed-filter";
import { ItemsCompletedPipe } from "../pipes/items-completed/items-completed";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingComponent,
    FinishedComponent,
    AddListComponent,
    ListsComponent,
    CompletedFilterPipe,
    ItemsCompletedPipe
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
    FinishedComponent,
    AddListComponent,
    ListsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    wishesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
