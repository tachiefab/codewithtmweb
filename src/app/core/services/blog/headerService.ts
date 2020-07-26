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

    private headerClass = new BehaviorSubject<Message>(new Message({}));
    headerCast = this.headerClass.asObservable();

    private headerBack = new BehaviorSubject<Message>(new Message({}));
    headerBackCast = this.headerBack.asObservable();

    private sideBar = new BehaviorSubject<Message>(new Message({}));
    sideBarCast = this.sideBar.asObservable();

    constructor() { }

    sendHeaderInfo(content: any) {
        this.message.next(new Message(content));
    }

    sendBootstrapClass(content: any) {
        this.headerClass.next(new Message(content));
    }

    sendHeaderBack(content: any) {
        this.headerBack.next(new Message(content));
    }

    sendsideBar(content: any) {
        this.sideBar.next(new Message(content));
    }

}