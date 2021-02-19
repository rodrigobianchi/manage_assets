import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  authenticatedLogin: string;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.authenticatedLogin = this.authService.getAuthenticatedLogin();
  }

  logout() {
    this.authService.logoff();
    this.router.navigate(['/login']);
  }

}
