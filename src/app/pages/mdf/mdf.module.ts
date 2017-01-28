import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdfRoutingModule } from './mdf-routing.module';
import { MdfComponent } from './mdf.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MdfRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MdfComponent]
})
export class MdfModule { }
