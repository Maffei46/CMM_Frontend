import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    apiUrl = 'https://agenzia01.herokuapp.com/creativehub';
    constructor(private http:HttpClient,private route:Router){

    }
    proceedLogin(usercreed:any){
        return this.http.post(environment.Server+'/users/login',usercreed)
    }
    Logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        this.route.navigate(['login'])
    }
    isLogged(){
        return localStorage.getItem('token')!=null;
    }
    loggedAs(){
        return localStorage.getItem('name');
    }
}