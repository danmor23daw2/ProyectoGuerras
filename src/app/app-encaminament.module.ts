/*
 * Mòdul d'encaminament
 * @author sergi grau, sergi.grau@fje.edu
 * @version 1.0
 * date 15.10.2017
 * format del document UTF-8
 *
 * CHANGELOG
 * 15.10.2017
 * - Mòdul d'encaminament
 *
 * NOTES
 * ORIGEN
 * Desenvolupament Aplicacions Web. Jesuïtes El Clot
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeolocationComponent } from './geolocation.component';
import { M02_SumaComponent } from './m02-suma.component';
import {M15_PrimeraComponent} from './m15-primera.component'
import {M15_SegonaComponent} from './m15-segona.component'
import {activitat} from './activitat'

const encaminaments: Routes = [
  { path: '', redirectTo: '/salutacio', pathMatch: 'full' },
  { path: 'salutacio', component: M02_SumaComponent },
  { path: 'suma', component: GeolocationComponent },
  { path: 'primera', component: M15_PrimeraComponent },
  { path: 'segona', component: M15_SegonaComponent },
  { path: 'activitat', component: activitat },
];

@NgModule({
  imports: [RouterModule.forRoot(encaminaments)],
  exports: [RouterModule]
})
export class AppEncaminamentModule { }

