import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OperadorasRoutingModule, operadorasRoutedComponents} from "./operadoras-routing.module";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    OperadorasRoutingModule,
    SharedModule
  ],
  declarations: [
    operadorasRoutedComponents
  ]
})
export class OperadorasModule { }
