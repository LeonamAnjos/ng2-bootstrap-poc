import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OperadorasRoutingModule, operadorasRoutedComponents} from "./operadoras-routing.module";

@NgModule({
  imports: [
    CommonModule,
    OperadorasRoutingModule
  ],
  declarations: [operadorasRoutedComponents]
})
export class OperadorasModule { }
