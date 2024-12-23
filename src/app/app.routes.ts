import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'my-work',
    component: MyWorkComponent
  },

  {
    path: 'resume',
    component: ResumeComponent
  },

  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: '**',
    component: ErrorComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  }
];
