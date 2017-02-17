import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ConsultaPlanosComponent} from './consulta-planos/consulta-planos.component';

const routes: Routes = [
  { path: '', component: ConsultaPlanosComponent },
];

export const routedComponents = [ConsultaPlanosComponent];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanosRoutingModule { }

