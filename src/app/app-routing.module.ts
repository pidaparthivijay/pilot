import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'about' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact' }
  },
  {
    path: 'education',
    component: EducationComponent,
    data: { animation: 'education' }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { animation: 'projects' }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: { animation: 'resume' }
  },
  {
    path: 'skills',
    component: SkillsComponent,
    data: { animation: 'skills' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
