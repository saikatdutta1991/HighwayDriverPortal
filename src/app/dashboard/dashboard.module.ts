import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './layouts/master/master.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
	declarations: [HomeComponent, MasterComponent, SidebarComponent, NavbarComponent, FooterComponent],
	imports: [
		CommonModule,
		DashboardRoutingModule
	]
})
export class DashboardModule { }
