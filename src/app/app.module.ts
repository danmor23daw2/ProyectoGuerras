import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { activitat } from './activitat';

@NgModule({
  declarations: [
    activitat
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [activitat]
})
export class AppModule { }
