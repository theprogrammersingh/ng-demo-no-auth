import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { SnackbarService } from '../services/snackbar.service';

@Injectable()
export class HttpFailureInterceptor implements HttpInterceptor {
  constructor(
    private snackbarService: SnackbarService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
          }
        },
        (err) => {
          console.log('There is some problem with the API.');
        }
      )
    );
  }
}
