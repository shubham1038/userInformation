import { Component, ViewEncapsulation } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: '',
    templateUrl: './confirmok.component.html',
    styleUrls: ['./confirmok.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ConfirmOkComponent {
    title: string = 'Information';
    msg: string = '';

    confirmLabel: string = 'OK';
    confirmCallback: Function;

    constructor(public bsModalRef: BsModalRef) { }

    confirmClick() {
        if (this.confirmCallback) {
            this.confirmCallback()
        }
    }

}
