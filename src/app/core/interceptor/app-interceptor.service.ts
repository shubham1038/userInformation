import { Injectable } from '@angular/core';
import { AppLoaderService } from '../service/app-loader.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AppInterceptorService {

  private count: number = 0;
  constructor(public loaderService: AppLoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    this.loaderService.show();
    
    const header = new HttpHeaders({
      'name' : 'dev'
    })
    const clone = req.clone({
      headers: header
    })

    return next.handle(clone)
      .pipe(tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
            this.loaderService.hide()
          }
      }),
      catchError(this.errorHandler))
   //https://stackoverflow.com/questions/49385369/angular-show-spinner-for-every-http-request-with-very-less-code-changes
   //https://onthecode.co.uk/angular-display-spinner-every-request/
    /*return next.handle(clone)
    .pipe(
      finalize(()=> {
        this.count--;
        if (this.count === 0) {
          this.loaderService.hide()
        }
        
      }),
      catchError(this.errorHandler)
    )*/   
   // return null;
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error || 'Server Error')
  }

}
