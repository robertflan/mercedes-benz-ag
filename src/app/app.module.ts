import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Appproducts } from './products.component';
import { AppInventory } from './Inventory.component';
import { RouterModule} from '@angular/router';

import {Routes} from '@angular/router';

const appRoutes: Routes = [
   { path: 'Products', component: Appproducts },
   { path: 'Inventory', component: AppInventory },
];

@NgModule ({
   imports: [ BrowserModule,
   RouterModule.forRoot(appRoutes)],
   declarations: [ AppComponent,Appproducts,AppInventory],
   bootstrap: [ AppComponent ]
})
export class AppModule { }
