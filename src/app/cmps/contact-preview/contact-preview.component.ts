import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {
  @Input() contact!: Contact
  @Output() removeContact=new EventEmitter<string>()

  constructor(private router: Router) { }

  onContactDetails(ev: MouseEvent): void {
    ev.stopPropagation()
    this.router.navigate(['contact/details', this.contact._id])
    console.log('hi')
  }

  onRemove(ev: MouseEvent): void {
    ev.stopPropagation()
    console.log('contact', this.contact)
    this.removeContact.emit(this.contact._id)
  }
}
