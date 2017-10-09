import { Component } from '@angular/core';
import { Products } from './products';

@Component ({
   selector: 'products-form',
   templateUrl: './products-form.component.html'
})

export class ProductsFormComponent {
   model = new Products(1,'ProductA');
}