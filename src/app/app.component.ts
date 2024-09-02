import { Component } from '@angular/core';
import { LoginService } from './services/login-service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'askart';


  constructor(public loginService:LoginService){}
   
}
