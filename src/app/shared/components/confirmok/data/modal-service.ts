import { Injectable } from "@angular/core";
import { ConfirmOkComponent } from '../confirmok.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Injectable({
    providedIn: 'root'    
})
export class ModalService {

    constructor(private bsModalService: BsModalService){

    }
    confirmOK(
        msg: string,
        confirmCallback: () => void,
        title?: string,
        confirmLabel?: string,
        cancelLabel?: string) {

        const clsname: string = (title === 'Information') ? 'confirmModal reassign-popup' : 'confirmModal';
        const modalRef: BsModalRef = this.bsModalService.show(ConfirmOkComponent, { class: clsname, ignoreBackdropClick: true, keyboard: false, animated: false, backdrop: 'static' });

        modalRef.content.title = title || 'Information';
        modalRef.content.confirmLabel = confirmLabel || 'OK';

        modalRef.content.msg = msg;
        modalRef.content.confirmCallback = confirmCallback;
        return modalRef;
    }
    
}