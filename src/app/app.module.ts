import { MovingrobotModule } from './modules/movingrobot/movingrobot.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgEventBus } from 'ng-event-bus';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MovingrobotModule, FontAwesomeModule],
  providers: [NgEventBus],
  bootstrap: [AppComponent],
})
export class AppModule {}
