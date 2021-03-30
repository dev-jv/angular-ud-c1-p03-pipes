import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// + Angular 10 / Add the localize package
import { LOCALE_ID, NgModule } from '@angular/core';
import '@angular/common/locales/global/es';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
