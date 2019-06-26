import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from './layouts/master/master.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
	{
		path : '',
		component : MasterComponent,
		children : [
			{
				path : 'dashboard',
				component : HomeComponent
			},
			{
				path : '',
				component : HomeComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DashboardRoutingModule { }
