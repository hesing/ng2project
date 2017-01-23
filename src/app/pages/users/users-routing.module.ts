import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
	{
		path: '',
		component: UsersComponent,
		children: [
			{
				path: '',
				component: UserListComponent
			}
			// {
			// 	path: 'create',
			// 	component: UserCreateComponent
			// },
			// {
			// 	path: ':id',
			// 	component: UserSingleComponent
			// },
			// {
			// 	path: ':id/edit',
			// 	component: UserEditComponent
			// }
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UsersRoutingModule { }