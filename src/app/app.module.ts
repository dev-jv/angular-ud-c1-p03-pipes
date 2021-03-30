import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// + Angular 10 / Add the localize package
import { LOCALE_ID, NgModule } from '@angular/core';
import '@angular/common/locales/global/es'; // spanish
import '@angular/common/locales/global/fr'; // french
import '@angular/common/locales/global/en'; // french

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' } // Default language
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
