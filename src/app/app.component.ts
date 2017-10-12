import { 
      Component 
   } from '@angular/core'; 
   
   import { 
      ChildComponent 
   } from './child.component'; 
   
   @Component ({ 
      selector: 'my-app', 
      template: '<child-app></child-app> ' 
   }) 
   
   export class AppComponent { }