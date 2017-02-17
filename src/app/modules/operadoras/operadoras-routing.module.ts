import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ConsultaOperadorasComponent} from "./consulta-operadoras/consulta-operadoras.component";

const operadorasRoutes: Routes = [
  { path: '', component: ConsultaOperadorasComponent },
];

export const operadorasRoutedComponents = [ ConsultaOperadorasComponent ];

@NgModule({
  imports: [RouterModule.forChild(operadorasRoutes)],
  exports: [RouterModule]
})
export class OperadorasRoutingModule {}


