import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { loginRouting } from './login.routing';
import { LoginComponent } from '../login.component';

@NgModule({
  imports: [
    BrowserModule,
    loginRouting
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule {}
