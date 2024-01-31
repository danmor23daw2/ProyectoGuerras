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
  <style>

.custom-toolbar button {
  margin-right: 10px; /* Ajusta el espacio entre los botones */
  color: white; /* Cambia el color del texto de los botones */
}

.custom-toolbar button:hover {
  background-color: #7c1fb2; /* Cambia el color de fondo al pasar el ratón sobre un botón */
}

  </style>
  <mat-toolbar color="primary" class="custom-toolbar">
  <button mat-button routerLink="/salutacio" routerLinkActive="active">Salutacio</button>
  <button mat-button routerLink="/suma" routerLinkActive="active">Suma</button>
  <button mat-button routerLink="/primera" routerLinkActive="active">Primera</button>
  <button mat-button routerLink="/segona" routerLinkActive="active">Segona</button>
  <button mat-button routerLink="/activitat" routerLinkActive="active">Gerra</button>
</mat-toolbar>



    <router-outlet></router-outlet>
  `
})
export class M11_EncaminamentComponent {
  titol = 'DAW2 demo de routing';
}