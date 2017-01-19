import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from '../about-user/about-user.component';
import { AboutSectionComponent } from './about-section.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutSectionComponent,
    children: [
      {
        path: '',
        component: AboutComponent
      },
      {
        path: ':username',
        component: AboutUserComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule { }
