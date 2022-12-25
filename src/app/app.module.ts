import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './landing-page/nav-bar/nav-bar.component';
import { BannerComponent } from './landing-page/banner/banner.component';
import { FormComponent } from './landing-page/form/form.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { AboutComponent } from './landing-page/about/about.component';
import { ServicesComponent } from './landing-page/services/services.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SubmitSuccessComponent } from './submit-success/submit-success.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    FormComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    LandingPageComponent,
    SubmitSuccessComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
