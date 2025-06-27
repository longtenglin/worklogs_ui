import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routes';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {LtlLeftNavigatorComponent} from './common/ltl-left-navigator/ltl-left-navigator.component';
import {MatCard} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideMarkdown} from 'ngx-markdown';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSlideToggleModule,
    LtlLeftNavigatorComponent,
    MatCard,
  ],
  providers: [
    provideAnimationsAsync(),
    provideMarkdown()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
