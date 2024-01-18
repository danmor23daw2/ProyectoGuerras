import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppEncaminamentModule } from './app-encaminament.module';
import {M11_EncaminamentComponent} from './m11-encaminament.component'
import { activitat } from './activitat';

@NgModule({
  declarations: [
    activitat,
    M11_EncaminamentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppEncaminamentModule
  ],
  providers: [],
  bootstrap: [M11_EncaminamentComponent]
})
export class AppModule { }
