import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, take } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserMsgService } from 'src/app/services/user-msg.service';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private userMsgService:UserMsgService
    ) { }

  contacts$!: Observable<Contact[]>

  ngOnInit(): void {
    this.setContacts()
    this.contacts$ = this.contactService.contacts$
  }

  async setContacts() {
    this.contactService.loadContacts()
      .pipe(take(1))
      .subscribe({
        error: err => {
          console.log('err', err)
        }
      })
  }

//   this.userMsgService.setUserMsg(`Success Deleting Contact (${this.contactId})`);
//   this.onBack()
// },
// error: err => {
//   this.userMsgService.setUserMsg(`Failed Deleting Contact (${this.contactId})`);


  onRemoveContact(contactId: string):void {
    console.log('remove contact index contactId', contactId)
    this.contactService.deleteContact(contactId).subscribe({
      complete:()=>{
        this.userMsgService.setUserMsg(`Success Deleting Contact (${contactId})`);
      },
      error: err=>{
        this.userMsgService.setUserMsg(`Failed Deleting Contact (${contactId})`);
          console.log('error deleting contact from page-index:', err)
      }
  }) 
  }

}
