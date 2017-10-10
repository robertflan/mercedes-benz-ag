import {
      Component
   } from '@angular/core';
   
   @Component ({
      selector: 'my-app',
      templateUrl: 'app/app.component.html'
   })
   
   export class AppComponent {
      TutorialName: string = 'Angular JS2';
      appList: string[] = ["Binding", "Display", "Services"];
   }