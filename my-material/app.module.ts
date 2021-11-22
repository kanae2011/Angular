import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { BrowserAnimationsModule }  from  '@angular/platform-browser/animations';
import  { MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
