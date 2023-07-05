import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor() { }


    user = {
        _id: 'u101',
        username: 'Bobo',
        isAdmin: true,
        name: 'McLoving',
        coins: 100,
        moves: [],
    }


    private _loggedInUser$ = new BehaviorSubject(this.user)
    // private _loggedInUser$ = new BehaviorSubject(null)
    public loggedInUser$ = this._loggedInUser$.asObservable()


    getLoggedInUser()  {
        return this._loggedInUser$.value
    }
}
