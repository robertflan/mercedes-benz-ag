import { 
    Injectable 
 } from '@angular/core'; 
 
 @Injectable() 
 export class appService {  
    getApp(): string { 
       return "Hello world"; 
    } 
 }