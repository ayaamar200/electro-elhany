import { AuthService } from './../../../core/auth/services/auth.service';
import { Component, inject, input, OnInit, PLATFORM_ID } from '@angular/core';
import { FlowbiteService } from '../../../core/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly authService = inject(AuthService);
  private readonly flowbiteService = inject(FlowbiteService);
  isLogin: boolean = false;
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
    this.checkUserLogin();
  }

  checkUserLogin(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isLogin = !!localStorage.getItem('token');
    }
  }

  signOut(): void {
    this.authService.signOut();
    this.isLogin = false;
  }
}
