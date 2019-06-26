import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	private dashboarddata: any = {};
	private bankinfo:any = {};
	private currencySymbol: string;

	constructor(private dashboardService: DashboardService, private auth: AuthService) { }

	ngOnInit() {
		this.currencySymbol = this.auth.getCurrencySymbol(); //set currency symbol
	}


	ngAfterViewInit() {
		this.dashboardService.getDashboardDetails().subscribe( (data) => {
			this.dashboarddata = data; //set dashboard informations
			this.bankinfo = data.bank; //set bank info
		});
	}



}
