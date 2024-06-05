import { NgModule } from '@angular/core';

import { OverviewComponent } from './overview.component';
import {OverviewRoutingModule} from "./overview-routing.module";

@NgModule({
  imports: [
    OverviewRoutingModule
  ],
  declarations: [OverviewComponent]
})
export class OverviewModule {
}
