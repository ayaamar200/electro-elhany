import { HttpInterceptorFn } from '@angular/common/http';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({ withCredentials: true });

  return next(req);
};
