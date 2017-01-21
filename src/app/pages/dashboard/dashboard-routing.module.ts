import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";
import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUserHomeComponent } from './users/dashboard-user-home.component';
import { DashboardUserDetailComponent } from './users/dashboard-user-detail.component';

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
				component: DashboardUsersComponent,
				children: [
					{
						path: '',
						component: DashboardUserHomeComponent
					},
					{
						path: ':username',
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
