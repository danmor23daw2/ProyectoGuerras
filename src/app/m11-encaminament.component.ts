import { Component } from '@angular/core';

@Component({
  selector: 'aplicacio',
  template: `
    <mat-toolbar color="primary" class="custom-toolbar">
      <button mat-button routerLink="/salutacio" routerLinkActive="active">
        <mat-icon>home</mat-icon> 
      </button>
      <button mat-button routerLink="/suma" routerLinkActive="active">
      <mat-icon>room</mat-icon>
      </button>
      <button mat-button routerLink="/primera" routerLinkActive="active">
      <mat-icon>date_range</mat-icon>
      </button>
      <button mat-button routerLink="/segona" routerLinkActive="active">
      <mat-icon>favorite_border</mat-icon>
      </button>
      <button mat-button routerLink="/activitat" routerLinkActive="active">
        <mat-icon>build</mat-icon>
      </button>
    </mat-toolbar>

    <router-outlet></router-outlet>
  `,
  styles: [`
    .custom-toolbar button {
      margin-left: 10px;
      padding-left:15px;
      width: 60px; 
      height: 40px; 
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .custom-toolbar button:hover {
      background-color: #7c1fb2; 
    }
  `]
})
export class M11_EncaminamentComponent {
  titol = 'DAW2 demo de routing';
}
