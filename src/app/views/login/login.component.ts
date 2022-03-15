import { Router } from '@angular/router';
import { AuthenticationService } from './../../_services/authentication-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup({
    email: new FormControl("",Validators.required),
    password: new FormControl("",Validators.required)
  })
  constructor(private authService: AuthenticationService,private route:Router) { 
  }

  ngOnInit(): void {
  }
  ProceedLogin(){
    if(this.loginform.valid){
      this.authService.proceedLogin(this.loginform.value).subscribe(result=>{
        var responsedata: any;
        responsedata=result;
        if(responsedata!=null){
          localStorage.setItem('token', responsedata.token);
          localStorage.setItem('name', responsedata.user.nome+' '+responsedata.user.cognome);
          this.route.navigate(['reserved','current'])
        }
      })
    }
  }

}
