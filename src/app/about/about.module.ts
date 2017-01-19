import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from '../about-user/about-user.component';

// services
import { UserService } from '../shared/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent, AboutUserComponent],
  providers: [UserService]
})
export class AboutModule { }
