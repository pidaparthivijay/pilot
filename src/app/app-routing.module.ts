import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'First' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'Second' }
  },
  {
    path: 'education',
    component: EducationComponent,
    data: { animation: 'Third' }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { animation: 'Fourth' }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: { animation: 'Fifth' }
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { animation: 'Sixth' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
