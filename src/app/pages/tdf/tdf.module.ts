import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TdfRoutingModule } from './tdf-routing.module';
import { TdfComponent } from './tdf.component';

@NgModule({
  imports: [
    CommonModule,
    TdfRoutingModule,
    FormsModule
  ],
  declarations: [TdfComponent]
})
export class TdfModule { }
