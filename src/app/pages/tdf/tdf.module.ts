import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdfRoutingModule } from './tdf-routing.module';
import { TdfComponent } from './tdf.component';

@NgModule({
  imports: [
    CommonModule,
    TdfRoutingModule
  ],
  declarations: [TdfComponent]
})
export class TdfModule { }
