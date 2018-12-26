import { Component ,isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portal';

constructor(){
  
}
ngOnInit() {
  if (isDevMode()) {
    console.log('👋 Development!');
    environment.urlpath  = 'http://localhost:8100';
    
  } else {
    console.log('💪 Production!');
    environment.urlpath  = window.location.origin;
  }
}

}
