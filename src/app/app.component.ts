import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filter-demo';
  loggedInUser = "Vinay";

  changehandle(){
    console.log('came inside the change handle method')
  }
}
