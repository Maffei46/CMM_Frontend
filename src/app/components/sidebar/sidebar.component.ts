import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/_services/authentication-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  loggedAs;
  isLogged;
  constructor(private authService: AuthenticationService) {
    this.isLogged = authService.isLogged;
    this.loggedAs = authService.loggedAs;
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.Logout();
  }

}
