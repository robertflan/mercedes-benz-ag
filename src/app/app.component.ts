import { 
      Component 
   } from '@angular/core';  
   
   @Component ({ 
      selector: 'my-app', 
      template: '<p>Multiplier: {{2 | Multiplier: 10}}</p>' 
   }) 
   export class AppComponent {  } 