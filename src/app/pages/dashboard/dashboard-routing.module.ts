import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";
import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUserHomeComponent } from './users/dashboard-user-home.component';
import { DashboardUserDetailComponent } from './users/dashboard-user-detail.component';
import { AuthGuard } from '../../shared/guards/auth-guard.service';
import { CanDeactivateGuard } from '../../shared/guards/can-deactivate-guard.service';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: DashboardComponent
			},
			{
				path: 'users',
				canActivateChild: [ AuthGuard ],
				component: DashboardUsersComponent,
				children: [
					{
						path: '',
						component: DashboardUserHomeComponent
					},
					{
						path: ':username',
						canDeactivate: [ CanDeactivateGuard ],
						component: DashboardUserDetailComponent
					}
				]
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DashboardRoutingModule { }
