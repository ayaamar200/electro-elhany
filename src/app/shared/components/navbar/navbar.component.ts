import { AuthService } from './../../../core/auth/services/auth.service';
import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  PLATFORM_ID,
  Signal,
  signal,
} from '@angular/core';
import { FlowbiteService } from '../../../core/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { CartService } from '../../../features/cart/services/cart.service';

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
  private readonly cartService = inject(CartService);
  isLogin: boolean = false;

  count: Signal<number> = computed(() => this.cartService.countNumber());
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
