import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from "./page-header/page-header.component";
import { LogService } from "./log.service";
import { Ng2SmartTableModule, Ng2SmartTableComponent } from 'ng2-smart-table';

@NgModule({
  imports: [
    CommonModule,
    Ng2SmartTableModule
  ],
  declarations: [
    PageHeaderComponent
  ],
  exports: [
    PageHeaderComponent,
    Ng2SmartTableComponent
  ],
  providers: [
    LogService
  ]
})
export class SharedModule { }
