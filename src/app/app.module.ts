import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {Ng2PaginationModule} from 'ng2-pagination';

@NgModule ({
   imports:      [ BrowserModule,Ng2PaginationModule],
   declarations: [ AppComponent],
   bootstrap:    [ AppComponent ]
})
export class AppModule { }