import {
      Component
   } from '@angular/core';
   
   @Component ({
      selector: 'my-app',
      template: `<button (Click) = "onClickMe()"> Click Me </button> {{clickMessage}}`
   })
   
   export class AppComponent {
      clickMessage = 'Hello';
      onClickMe() {
         this.clickMessage = 'This tutorial!';
      }
   }