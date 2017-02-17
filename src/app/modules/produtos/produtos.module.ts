import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProdutosRoutingModule, routedComponents} from "./produtos-routing.routing";

@NgModule({
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ],
  declarations: [ routedComponents ]
})
export class ProdutosModule { }
