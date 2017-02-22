import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OperadorasRoutingModule, operadorasRoutedComponents} from "./operadoras-routing.module";
import {PageHeaderComponent} from "../../shared/page-header/page-header.component";

@NgModule({
  imports: [
    CommonModule,
    OperadorasRoutingModule
  ],
  declarations: [
    operadorasRoutedComponents,
    PageHeaderComponent
  ]
})
export class OperadorasModule { }
