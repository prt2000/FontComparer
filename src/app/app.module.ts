import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TextInputComponent } from './text-input/text-input.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MoreAboutFontsComponent } from './more-about-fonts/more-about-fonts.component';
import { RouterModule, Routes } from '@angular/router';
import { FontCardComponent } from './font-card/font-card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FetchFontsComponent } from './fetch-fonts/fetch-fonts.component';

const appRoutes:Routes = [
  {path:'', component:TextInputComponent},
  {path:'about', component:AboutPageComponent},
  {path:'morefonts', component:MoreAboutFontsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextInputComponent,
    AboutPageComponent,
    MoreAboutFontsComponent,
    FontCardComponent,
    FetchFontsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
