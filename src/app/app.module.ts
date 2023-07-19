import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsEducationComponent } from './skills-education/skills-education.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    SkillsEducationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
