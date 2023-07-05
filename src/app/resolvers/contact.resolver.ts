import { Injectable } from '@angular/core';
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

@Injectable({
    providedIn: 'root'
})
export class ContactResolver implements Resolve<Contact> {

    constructor(private contactService: ContactService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> {
        const id = route.params['contactId']
        return this.contactService.getContactById(id)
    }
}
