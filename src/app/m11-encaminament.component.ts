import { Component } from '@angular/core';

@Component({
  selector: 'aplicacio',
  template: `
    <mat-toolbar color="primary" class="custom-toolbar">
      <div class="spacer"></div>
      <mat-icon mat-button routerLink="/salutacio" routerLinkActive="active">
        home
      </mat-icon>
      <mat-icon mat-button routerLink="/suma" routerLinkActive="active">
        room
      </mat-icon>
      <mat-icon routerLink="/primera" routerLinkActive="active">
        date_range
      </mat-icon>
      <mat-icon mat-button routerLink="/segona" routerLinkActive="active">
        favorite_border
      </mat-icon>
      <mat-icon mat-button routerLink="/activitat" routerLinkActive="active">
        build
      </mat-icon>
    </mat-toolbar>

    <router-outlet></router-outlet>
  `,
  styles: [`
  @import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');
    .custom-toolbar {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .custom-toolbar mat-icon {
      margin-top: 10px;
      margin-left: 10px;
      width: 60px; 
      height: 40px; 
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      transition: color 0.3s; 
      cursor: pointer;
    }

    .custom-toolbar mat-icon:hover {
      color: #a781e8; 
      
    }
  `]
})
export class M11_EncaminamentComponent {
  titol = 'DAW2 demo de routing';
}

