import { 
      Component 
   } from '@angular/core';  
   
   @Component ({ 
      selector: 'my-app', 
      template: '<div> {{values}} </div> ' 
   }) 
   
   export class AppComponent { 
      values = ''; 
      ngOnInit() { 
         this.values = "Hello"; 
      } 
   }