import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { GreetingJumbotronComponent } from './components/greeting-jumbotron/greeting-jumbotron.component';
import { SocialHorizontalComponent } from './components/social-horizontal/social-horizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GreetingJumbotronComponent,
    SocialHorizontalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
