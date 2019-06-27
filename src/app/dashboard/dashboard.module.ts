import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingModule } from 'angular-star-rating';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './layouts/master/master.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PayoutsComponent } from './payouts/payouts.component';
import { AccountComponent } from './account/account.component';

@NgModule({
	declarations: [HomeComponent, MasterComponent, SidebarComponent, NavbarComponent, FooterComponent, PayoutsComponent, AccountComponent],
	imports: [
		CommonModule,
		StarRatingModule.forRoot(),
		DashboardRoutingModule
	]
})
export class DashboardModule { }
