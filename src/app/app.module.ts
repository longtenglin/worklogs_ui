import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app.routes';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {LtlLeftNavigatorComponent} from './common/ltl-left-navigator/ltl-left-navigator.component';
import {MatCard} from '@angular/material/card';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    LtlLeftNavigatorComponent,
    MatCard
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
