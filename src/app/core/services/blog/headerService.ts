import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class Message {
    content: any;

    constructor(content: any) {
        this.content = content;
    }
}


@Injectable({
    providedIn: 'root'
  })
export class HeaderService {

    private message = new BehaviorSubject<Message>(new Message({}));
    cast = this.message.asObservable();

    constructor() { }

    sendMessage(content: any) {
        this.message.next(new Message(content));
    }
}