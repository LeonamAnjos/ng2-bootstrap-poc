import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ConsultaProdutosComponent} from "./consulta-produtos/consulta-produtos.component";
import {IncluirProdutoComponent} from "./incluir-produto/incluir-produto.component";

const routes: Routes = [
  { path: '', component: ConsultaProdutosComponent },
  { path: 'incluir', component: IncluirProdutoComponent },
];

export const routedComponents = [ConsultaProdutosComponent, IncluirProdutoComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule { }

