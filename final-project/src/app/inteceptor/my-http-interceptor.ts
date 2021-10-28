import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, finalize } from 'rxjs/operators';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let ok: string;
    let beaererAuth =
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTYyODIzMTk0OSwiZXhwIjoxNjI5MDk1OTQ5fQ.r4m4NpwsPecj25MxZgsfvkB4J4urueCAhrtwljupYKjqDfOHhtprAv9qTerRDCwtTrGcHj_auEqf-pBGj4SWxQ';
    let authReq: HttpRequest<any> = req;
    authReq = req.clone({
      headers: req.headers
        .set('Authorization', 'Bearer ' + beaererAuth)
        .set('X-TENANT-ID', 'fe_0321'),
    });

    console.log(authReq);

    return next.handle(authReq).pipe(
      tap(
        (event) => {
          ok = event instanceof HttpResponse ? 'succeeded' : '';
        },
        (error) => {}
      ),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      }),
      finalize(() => {})
    );
  }
}
