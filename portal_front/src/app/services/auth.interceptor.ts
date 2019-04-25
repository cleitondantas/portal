import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    shared: SharedService;
    constructor() {
          this.shared = SharedService.getInstance();

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
        let authRequest: any;
        if (this.shared.isLoggedIn()) {
            authRequest = req.clone({
                setHeaders: {
                    'Authorization' : this.shared.getToken()
                }
            });

            return next.handle(authRequest).pipe(
                catchError(err => {
                  if (err instanceof HttpErrorResponse && err.status === 0) {
                    console.log('Check Your Internet Connection And Try again Later');

                  } else if (err instanceof HttpErrorResponse && err.status === 401) {
                    this.shared.showError.emit('[' + err.status + '] Usuário invalido');
                  }
                  this.shared.messengerService.add({key: 'er', severity: 'error', summary: 'Falha na execução', detail: 'Não foi possivel realizar a ação'});
                  return throwError(err);
                })
              );
        } else {
            return next.handle(req).pipe(
                catchError(err => {
                  if (err instanceof HttpErrorResponse && err.status === 0) {
                    console.log('Check Your Internet Connection And Try again Later');
                  } else if (err instanceof HttpErrorResponse && err.status === 401) {
                    this.shared.showError.emit('[' + err.status + '] Usuário invalido');
                    console.log('ERRO[' + err.status + ']');
                  }
                  this.shared.messengerService.add({key: 'er', severity: 'error', summary: 'Falha na execução', detail: 'Não foi possivel realizar a ação'});
                  return throwError(err);
                })
              );
        }
    }

}
