import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { InlineSVGModule } from 'ng-inline-svg';


import { GalleriaModule } from 'primeng/primeng';
import { AccordionModule } from 'primeng/primeng';
import { Angular2ImageGalleryModule } from 'angular2-image-gallery'; 

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConfigService } from './services/config.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { MusicComponent } from './music/music.component';
import { BiographyComponent } from './biography/biography.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { SettingsComponent } from './settings/settings.component';
import { PhotosComponent } from './photos/photos.component';
import { CodeComponent } from './code/code.component';
import { StreamComponent } from './stream/stream.component';
import { ContactComponent } from './contact/contact.component';
const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'music', component: MusicComponent },
  { path: 'biography', component: BiographyComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'code', component: CodeComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomePageComponent },
  { path: '**', component: HomePageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    AboutComponent,
    MusicComponent,
    BiographyComponent,
    FootBarComponent,
    SettingsComponent,
    PhotosComponent,
    CodeComponent,
    StreamComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    GalleriaModule,
    AccordionModule,
    BrowserAnimationsModule,
    Angular2ImageGalleryModule,
    ChartsModule,
    InlineSVGModule
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
