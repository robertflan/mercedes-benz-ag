import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   templateUrl: 'app/app.component.html'  
})

export class AppComponent {
  appTitle: string = 'Welcome';
  appList: any[] = [ {
     "ID": "1",
     "url": 'app/images/1.png'
  },

  {
     "ID": "2",
     "url": 'app/images/2.jpg'
  } ];
}