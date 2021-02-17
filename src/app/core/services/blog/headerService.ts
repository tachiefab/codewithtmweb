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

    private commentCount = new BehaviorSubject<Message>(new Message({}));
    commentCountCast = this.commentCount.asObservable();

    private hasDarkTheme = new BehaviorSubject<Message>(new Message({}));
    hasDarkThemeCast = this.hasDarkTheme.asObservable();

    private postItem = new BehaviorSubject<Message>(new Message({}));
    postItemCast = this.postItem.asObservable();

    constructor() { }

    sendHeaderInfo(content: any) {
        this.message.next(new Message(content));
    }

    sendCommentCount(content: any) {
        this.commentCount.next(new Message(content));
    }

    sendHasDarkTheme(content: any) {
        this.hasDarkTheme.next(new Message(content));
    }

    sendPostItem(content: any) {
        this.postItem.next(new Message(content));
    }


}