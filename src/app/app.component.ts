import { Component } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './products.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component ({
   selector: 'my-app',
   template: ` <ul>
   <li><a [routerLink] = "['/Products']">Product</a></li>
   <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
</ul>
<router-outlet></router-outlet>`
})

export   class   AppComponent  {
}