import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./main/home/home.component";

const routes: Routes = [
  { path: 'dashboard', loadChildren: 'app/modules/dashboard/dashboard.module#DashboardModule' },
  { path: 'operadoras', loadChildren: 'app/modules/operadoras/operadoras.module#OperadorasModule' },
  { path: 'produtos', loadChildren: 'app/modules/produtos/produtos.module#ProdutosModule' },
  { path: 'planos', loadChildren: 'app/modules/planos/planos.module#PlanosModule' },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const routedComponents = [ HomeComponent ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


