import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TableModule } from "primeng/table";
import { TooltipModule } from "primeng/tooltip";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { EducationComponent } from "./education/education.component";
import { HomeComponent } from "./home/home.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ResumeComponent } from "./resume/resume.component";
import { MenuComponent } from "./shared/menu/menu.component";
import { SkillsComponent } from "./skills/skills.component";
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    TooltipModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
