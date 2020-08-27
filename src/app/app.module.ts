import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverComponent } from './components/cover/cover.component';
import { PopupComponent } from './components/popup/popup.component';
import { CloudComponent } from './components/objects/cloud/cloud.component';
import { CloudboxComponent } from './components/objects/cloudbox/cloudbox.component';
import { IntroComponent } from './components/intro/intro.component';
import { ExperienceComponent } from './components/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    PopupComponent,
    CloudComponent,
    CloudboxComponent,
    IntroComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
