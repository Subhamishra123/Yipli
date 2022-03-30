import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {YipliComponent} from '../components/yipli/yipli.component';
import {LandingpageComponent} from '../components/landingpage/landingpage.component';
import {ButtonComponent} from '../components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    YipliComponent,
    LandingpageComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
