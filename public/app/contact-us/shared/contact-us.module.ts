import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { contactUsRouting } from './contact-us.routing';
import { ContactsService } from './contacts.service';
import { ContactUsComponent } from '../contact-us.component';

@NgModule({
  imports: [
    BrowserModule,
    contactUsRouting
  ],
  declarations: [
    ContactUsComponent
  ],
  providers: [
    ContactsService,
    Title
  ]
})
export class ContactUsModule {}
