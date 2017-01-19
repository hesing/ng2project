import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from '../about-user/about-user.component';
import { AboutSectionComponent } from './about-section.component';

// services
import { UserService } from '../shared/services/user.service';
import { UserResolveService } from '../shared/services/user-resolve.service';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent, AboutUserComponent, AboutSectionComponent],
  providers: [UserService, UserResolveService]
})
export class AboutModule { }
