import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppEncaminamentModule } from './app-encaminament.module';
import {M11_EncaminamentComponent} from './routing/routing'
import { Inicio } from './inicio/inicio';
import { Guerras } from './guerras/guerras';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    Guerras,
    Inicio,
    M11_EncaminamentComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppEncaminamentModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,  
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [M11_EncaminamentComponent]
})
export class AppModule { }
