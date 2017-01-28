import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MdfComponent } from './mdf.component';

const routes: Routes = [
	{
		path: '',
		component: MdfComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MdfRoutingModule { }
