import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public dashboarddata: any = {};
	public bankinfo:any = {};
	public currencySymbol: string;
	public userData: any;

	constructor(private dashboardService: DashboardService, private auth: AuthService, private data: DataService) { }

	ngOnInit() {
		this.data.setHeaderText('Dashboard');
		this.userData = this.auth.getUserData();
		console.log(this.userData);
		this.currencySymbol = this.auth.getCurrencySymbol(); //set currency symbol
	}


	ngAfterViewInit() {
		this.dashboardService.getDashboardDetails().subscribe( (data) => {
			this.dashboarddata = data; //set dashboard informations
			this.bankinfo = data.bank; //set bank info
		});
	}



}
