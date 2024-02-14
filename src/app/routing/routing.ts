import { Component } from '@angular/core';

@Component({
  selector: 'aplicacio',
  templateUrl: './routing.html',
  styleUrls: ['./routing.css']
})
export class Routing {
  pageTitle:string = '';
  sidenavOpened = false;
  
  toggleSidenav() {
    this.sidenavOpened = !this.sidenavOpened;
  }
}

