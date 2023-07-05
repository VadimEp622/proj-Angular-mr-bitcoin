import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMsgService {

  private _userMsg$ = new BehaviorSubject<string>('');
  public userMsg$ = this._userMsg$.asObservable()

  setUserMsg(msg: string) {
    this._userMsg$.next(msg)
  }

  clearUserMsg() {
    this._userMsg$.next('');
  }
}
