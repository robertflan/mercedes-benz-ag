import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   template: ' <ul>
      <li><a [routerLink] = "['/Products']">Product</a></li>
      <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
   </ul>
   <router-outlet></router-outlet>'
})
export class AppComponent  { }