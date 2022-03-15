import { AuthenticationService } from './../_services/authentication-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router,  } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthenticationService,private route:Router){

  }
  canActivate(){
    if(this.authService.isLogged()){
      return true;  
    }else{
      this.route.navigate(['login'])
      return false;
    }
    
  }
  
}
