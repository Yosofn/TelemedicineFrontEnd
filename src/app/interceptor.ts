import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Disable SSL certificate verification
    // Only use this in development or trusted environments
    // This disables all security checks
    // Do not use in production
    const insecureReq = req.clone({ setHeaders: { 'X-Requested-With': 'XMLHttpRequest' }, withCredentials: true });
    return next.handle(insecureReq);
  }
}