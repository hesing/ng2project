import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdfRoutingModule } from './mdf-routing.module';
import { MdfComponent } from './mdf.component';

@NgModule({
  imports: [
    CommonModule,
    MdfRoutingModule
  ],
  declarations: [MdfComponent]
})
export class MdfModule { }
