import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'ng2-breadcrumb/ng2-breadcrumb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  private isToggled: boolean;

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.addFriendlyNameForRoute('/', 'Home');
    this.breadcrumbService.addFriendlyNameForRoute('/home', 'Home');
    this.breadcrumbService.addFriendlyNameForRoute('/dashboard', 'Dashboard');
    this.breadcrumbService.addFriendlyNameForRoute('/operadoras', 'Operadoras');
    this.breadcrumbService.addFriendlyNameForRoute('/planos', 'Planos');
  }

  onToggleClick() {
    this.isToggled = !this.isToggled;
    if(this.isToggled) {

    } else {

    }

    console.log("onToggleClick" + this.isToggled);


  }
}
