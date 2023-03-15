import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { SkillsComponent } from './main/skills/skills.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { ContactComponent } from './main/contact/contact.component';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { BackendComponent } from './main/skills/backend/backend.component';
import { FrontendComponent } from './main/skills/frontend/frontend.component';
import { PersonalComponent } from './main/skills/personal/personal.component';
import { ActiveSkillsComponent } from './main/skills/active-skills/active-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
    AboutMeComponent,
    BackendComponent,
    FrontendComponent,
    PersonalComponent,
    ActiveSkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressBarModule,
    MatTableModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
