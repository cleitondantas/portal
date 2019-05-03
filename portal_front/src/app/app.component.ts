import { Component , isDevMode } from '@angular/core';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal';

constructor() {
}


ngOnInit() {
  if (isDevMode()) {
    console.log('👋 Development!');
    environment.urlpath  = 'http://10.6.5.99:8100';
    //environment.urlpath  = 'http://localhost:8100';
    // environment.urlpath  = window.location.origin;
  } else {
    console.log('💪 Production!');
    environment.urlpath  = window.location.origin;
  }
}

}
