import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GalleriaModule } from 'primeng/primeng';
import { AccordionModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConfigService } from './services/config.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { MusicComponent } from './music/music.component';
import { BiographyComponent } from './biography/biography.component';
import { ContactComponent } from './contact/contact.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { SettingsComponent } from './settings/settings.component';
import { PhotosComponent } from './photos/photos.component';
import { CodeComponent } from './code/code.component';
import { StreamComponent } from './stream/stream.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    AboutComponent,
    MusicComponent,
    BiographyComponent,
    ContactComponent,
    FootBarComponent,
    SettingsComponent,
    PhotosComponent,
    CodeComponent,
    StreamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GalleriaModule,
    AccordionModule,
    BrowserAnimationsModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {
  configService = null;
  currentView = '';
  constructor(configService: ConfigService) {
    this.configService = configService;
  }
}
