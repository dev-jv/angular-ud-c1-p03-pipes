import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// + Angular 10 / Add the localize package
import { LOCALE_ID, NgModule } from '@angular/core';
import '@angular/common/locales/global/es'; // spanish
import '@angular/common/locales/global/fr'; // french
import '@angular/common/locales/global/en'; // english

import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DomsafePipe } from './pipes/domsafe.pipe';
import { PasswordPipe } from './pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    DomsafePipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'en' } // Default language
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
