import { AuthenticationService } from './../_services/authentication-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router,  } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
  constructor(private authService:AuthenticationService,private route:Router){

  }
  canActivate(){
    if(this.authService.isLogged()){
        this.route.navigate(['reserved','current'])
        return false;  
    }else{
      return true;
    }
    
  }
  
}
