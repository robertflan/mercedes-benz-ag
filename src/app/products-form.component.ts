import { Component } from '@angular/core';
import { Product } from './products';

@Component ({
   selector: 'products-form',
   templateUrl: './products-form.component.html'
})

export class ProductFormComponent {
   model = new Product(1,'ProductA');
}