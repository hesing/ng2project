import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUserHomeComponent } from './users/dashboard-user-home.component';
import { DashboardUserDetailComponent } from './users/dashboard-user-detail.component';
import { UserService } from '../../shared/services/user.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [
  	DashboardComponent, 
  	DashboardUsersComponent,
  	DashboardUserHomeComponent,
  	DashboardUserDetailComponent
  ],
  providers: [UserService]
})
export class DashboardModule { }
