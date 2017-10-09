import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductsFormComponent } from './products-form.component';

@NgModule ({
   imports: [ BrowserModule,FormsModule],
   declarations: [ AppComponent,ProductsFormComponent],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
