/*
 * Component que definex el marc per a fer uns encaminaments a altres components
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2017
 * - Component que definex el marc per a fer uns encaminaments a altres components
  * 1.12.2020
 * - Actualització a Angular 11
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'aplicacio',
  template: `
 <mat-toolbar color="primary">
  <span>{{ titol }}</span>
  <button mat-button [matMenuTriggerFor]="menu">
    Menú
  </button>
  <mat-menu #menu="matMenu">
    <a mat-menu-item routerLink="/salutacio" routerLinkActive="active">Salutacio</a>
    <a mat-menu-item routerLink="/suma" routerLinkActive="active">Suma</a>
    <a mat-menu-item routerLink="/primera" routerLinkActive="active">Primera</a>
    <a mat-menu-item routerLink="/segona" routerLinkActive="active">Segona</a>
    <a mat-menu-item routerLink="/activitat" routerLinkActive="active">Gerra</a>
  </mat-menu>
</mat-toolbar>

    <router-outlet></router-outlet>
  `
})
export class M11_EncaminamentComponent {
  titol = 'DAW2 demo de routing';
}