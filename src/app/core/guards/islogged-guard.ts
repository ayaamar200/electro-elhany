import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';

export const isloggedGuard: CanActivateFn = (route, state) => {
  const platformId = inject(PLATFORM_ID);
  const router = inject(Router);

  if (isPlatformBrowser(platformId)) {
    if (localStorage.getItem('token')) {
      return router.parseUrl('/home');
    } else {
      return true;
    }
  } else {
    return false;
  }
};
