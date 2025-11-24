import { RenderMode } from '@angular/ssr';
import { Routes } from '@angular/router';
import { NotfoundComponent } from './features/notfound/notfound.component';
import { HomeComponent } from './features/home/home.component';
import { BlankLayoutComponent } from './core/layouts/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { CartComponent } from './features/cart/cart.component';
import { DetailsComponent } from './features/details/details.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { WishlistComponent } from './features/wishlist/wishlist.component';
import { CheckoutComponent } from './features/checkout/checkout.component';
import { WiringDevicesComponent } from './features/wiring-devices/wiring-devices.component';
import { IndoorLightsComponent } from './features/indoor-lights/indoor-lights.component';
import { ProductsComponent } from './features/products/products.component';
import { StoreLocationsComponent } from './features/store-locations/store-locations.component';
import { OutdoorLightsComponent } from './features/outdoor-lights/outdoor-lights.component';
import { DecorativeLightsComponent } from './features/decorative-lights/decorative-lights.component';
import { authGuard } from './core/guards/auth-guard';
import { isloggedGuard } from './core/guards/islogged-guard';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,

    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Electro El-Hany',
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'Electro El-Hany',
      },
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
    path: '',
    component: BlankLayoutComponent,

    children: [
      {
        path: 'cart',
        component: CartComponent,
        title: 'Cart',
      },

      {
        path: 'indoor-lights',
        component: IndoorLightsComponent,
        title: 'Indoor Lights',
      },

      {
        path: 'outdoor-lights',
        component: OutdoorLightsComponent,
        title: 'Outdoor Lights',
      },
      {
        path: 'decorative-lights',
        component: DecorativeLightsComponent,
        title: 'Decorative Lights',
      },
      {
        path: 'wiring-devices',
        component: WiringDevicesComponent,
        title: 'Wiring Devices',
      },
      {
        path: 'details/:slug/:id',
        component: DetailsComponent,
        title: 'Product Details',
      },
      {
        path: 'details/:id',
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
        canActivate: [authGuard],
      },
      {
        path: 'all-products',
        component: ProductsComponent,
        title: 'All Products',
      },
      {
        path: 'store-locations',
        component: StoreLocationsComponent,
        title: 'Store Locations',
      },
    ],
  },

  {
    path: '**',
    component: NotfoundComponent,
    title: '404 Not Found',
  },
];
