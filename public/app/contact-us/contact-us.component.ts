import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

import { ContactsService } from './shared/contacts.service';

@Component({
  templateUrl: '/app/contact-us/contact-us.component.html',
  styleUrls: [
    'app/contact-us/contact-us.component.css'
  ]
})
export class ContactUsComponent {
  public page = 1;
  public pageSize = 10;
  public contacts: any[];

  public constructor(
    private titleService: Title,
    private contactsService: ContactsService
  ) {
    titleService.setTitle('Contact Us | Future150');

    this.activate();
  }

  private activate(): void {
    this.contactsService.getAll(null, this.page, this.pageSize)
      .subscribe(result => {
        this.contacts = result.contacts;
      });
  }
}
