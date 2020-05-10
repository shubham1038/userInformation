import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppLoaderService {

  constructor() { }

  isLoading = new Subject<String>();

    show() {
        this.isLoading.next('Request is Running');
    }

    hide() {
        this.isLoading.next('Request is Completed');
    }
}
