import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserMsgService } from 'src/app/services/user-msg.service';

@Component({
  selector: 'contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService,
    private userMsgService: UserMsgService
  ) { }

  contact$!: Observable<Contact>

  contactId!: string

  ngOnInit(): void {
    this.contact$ = this.route.data.pipe(map(data => {
      this.contactId = data['contact']._id
      return data['contact']
    }))
  }

  onBack(ev?: Event): void {
    if (ev) ev.stopPropagation()
    console.log('back', this.contactId)
    this.router.navigateByUrl('contact')
  }

  onRemove(ev: Event): void {
    ev.stopPropagation()
    console.log('remove', this.contactId)
    this.contactService.deleteContact(this.contactId).subscribe({
      next: () => {
        this.userMsgService.setUserMsg(`Success Deleting Contact (${this.contactId})`);
        this.onBack()
      },
      error: err => {
        this.userMsgService.setUserMsg(`Failed Deleting Contact (${this.contactId})`);
        console.log('err:', err)
      }
    })
  }

  onEdit(ev: Event): void {
    ev.stopPropagation()
    console.log('edit', this.contactId)
    this.router.navigate(['contact/edit', this.contactId])
  }
}
