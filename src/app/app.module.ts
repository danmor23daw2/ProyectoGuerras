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
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';


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
    MatFormFieldModule, 
    MatSelectModule, 
    NgFor, 
    MatInputModule, 
    FormsModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [M11_EncaminamentComponent]
})
export class AppModule { }
