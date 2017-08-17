import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/subject';

@Injectable()
export class MessageService{
    private subject = new Subject<any>();

    sendMessage( msg: string ){
        this.subject.next({text:msg})
    }
    clearMessage(){
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}

