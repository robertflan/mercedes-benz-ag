import { Component } from '@angular/core'; 
import { Router }  from '@angular/router';  

@Component ({  
   selector: 'my-app',  
   template: 'Inventory 
   <a class = "button" (click) = "onBack()">Back to Products</a>' 
})  

export class AppInventory {  
   constructor(private _router: Router){} 

   onBack(): void { 
      this._router.navigate(['/Product']); 
   } 
}