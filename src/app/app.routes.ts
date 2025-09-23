import { Routes } from '@angular/router';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { HomeComponent } from './features/home/home.component';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { CartComponent } from './features/cart/cart.component';
import { LightsComponent } from './features/lights/lights.component';
import { ProductsComponent } from './features/products/products.component';
import { DetailsComponent } from './features/details/details.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { WishlistComponent } from './features/wishlist/wishlist.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { WiringDevicesComponent } from './features/wiring-devices/wiring-devices.component';

export const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: 'Electro Elhany',
      },
      {
        path: 'cart',
        component: CartComponent,
        title: 'Cart',
      },
      {
        path: 'lights',
        component: LightsComponent,
        title: 'Lighting',
      },
      {
        path: 'products',
        component: ProductsComponent,
        title: 'Products',
      },
      {
        path: 'wiring-devices',
        component: WiringDevicesComponent,
        title: 'Wiring Devices',
      },
      {
        path: 'details',
        component: DetailsComponent,
        title: 'Product Details',
      },
      {
        path: 'contact',
        component: ContactUsComponent,
        title: 'Contact Us',
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
        title: 'Wishlist',
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        title: 'Checkout',
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        title: 'Login',
      },
      {
        path: 'register',
        component: RegisterComponent,
        title: 'Register',
      },
    ],
  },
  {
    path: '**',
    component: NotfoundComponent,
    title: '404 Not Found',
  },
];
