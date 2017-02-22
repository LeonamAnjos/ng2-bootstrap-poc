import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2BreadcrumbModule } from 'ng2-breadcrumb/ng2-breadcrumb';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from "./app-routing.module";
import { NavbarComponent } from './main/navbar/navbar.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { LogService } from "./shared/log.service";
import { PageHeaderComponent } from './shared/page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    routedComponents,
    PageHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2BreadcrumbModule.forRoot()
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
