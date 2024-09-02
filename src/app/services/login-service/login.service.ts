import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LoginViewModel } from 'src/app/model-classes/login-view-model/login-view-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  currentUserName='Arun';

  public Login(loginViewMOdel:LoginViewModel):Observable<any>{

    return this.httpClient.post<any>("/authenticate",loginViewMOdel,{responseType:"json"})
    .pipe(map(user=>{
      if(user){
        this.currentUserName=user.UserName;
      }
      return user;
    }));
  }
  
  public Logout(){
    this.currentUserName='';
  }
}
