import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule, routedComponents } from "./dashboard-routing.routing";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [ routedComponents ]
})
export class DashboardModule { }
