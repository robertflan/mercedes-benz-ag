import { Component } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './products.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component ({
   selector: 'my-app',
   template: '<div>Hello</div>',
   providers: [ProductService]
})

export   class   AppComponent  {
   iproducts: IProduct[];
   constructor(private _product: ProductService) {
   }
   
   ngOnInit() : void {
      this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
   }
}