import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginViewModel } from 'src/app/model-classes/login-view-model/login-view-model';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginViewModel: LoginViewModel = new LoginViewModel;
  loginError:string="";

  constructor(private loginService:LoginService, private router:Router){

  }

ngOnInit(): void {
  
}

onLoginClick(){
  this.loginService.Login(this.loginViewModel).subscribe(
    (response)=>{ 
      this.router.navigateByUrl("/home");
     },
    (error)=>{
      console.log(error);
      
      this.loginError="Invalid User or Password";
    })
}
}
