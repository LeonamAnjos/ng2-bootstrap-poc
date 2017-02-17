import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ConsultaProdutosComponent} from "./consulta-produtos/consulta-produtos.component";

const routes: Routes = [
  { path: '', component: ConsultaProdutosComponent },
];

export const routedComponents = [ConsultaProdutosComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule { }

