import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'about',
    loadChildren: 'app/about/about.module#AboutModule'
  },
  {
    path: 'dashboard',
    canActivate: [ AuthGuard ],
    loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'users',
    loadChildren: 'app/pages/users/users.module#UsersModule'
  },
  {
    path: 'tdf',
    loadChildren: 'app/pages/tdf/tdf.module#TdfModule'
  },
  {
    path: 'mdf',
    loadChildren: 'app/pages/mdf/mdf.module#MdfModule'
  },
  {
    path: 'demo',
    loadChildren: 'app/pages/demo/demo.module#DemoModule'
  },
  {
    path: '**',
    component: 	NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
