import { Component } from '@angular/core';

import { PendingComponent } from "../pending/pending.component";
import { FinishedComponent } from "../finished/finished.component";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendingComponent;
  tab2Root = FinishedComponent;

  constructor() {

  }
}
