import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './layouts/master/master.component';

@NgModule({
	declarations: [HomeComponent, MasterComponent],
	imports: [
		CommonModule,
		DashboardRoutingModule
	]
})
export class DashboardModule { }
