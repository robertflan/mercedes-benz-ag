import { 
    Component 
 } from '@angular/core';  
 
 @Component ({ 
    selector: 'child-app', 
    template: '<div> {{values}} </div> ' 
 }) 
 
 export class ChildComponent { 
    values = ''; 
    ngOnInit() { 
       this.values = "Hello"; 
    } 
 }