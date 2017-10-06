import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { Appproduct } from './products.component';
import { AppInventory } from './Inventory.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: 'Products', component: Appproduct },
    { path: 'Inventory', component: AppInventory },
 ];

@NgModule ({
   imports:      [ BrowserModule,HttpModule],
   declarations: [ AppComponent],
   bootstrap:    [ AppComponent ]
})
export class AppModule { }
