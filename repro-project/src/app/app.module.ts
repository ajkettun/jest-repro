import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReproLibModule } from 'repro-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReproLibModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
