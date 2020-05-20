import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class AppLoaderService {

  constructor(private spinner: NgxSpinnerService) { }

  isLoading = new Subject<String>();

    show() {
        this.isLoading.next('Request is Running');
        this.spinner.show()
    }

    hide() {
        this.isLoading.next('Request is Completed');
        this.spinner.hide()
    }
}
