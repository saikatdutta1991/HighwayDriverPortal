import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

	public currencySymbol: string;
	public accountBalance:string = '';
	public transactionRecords: Array<any> = [];
	public transactionRecordsLoading: boolean = true;
	public transactionRecorsHasMore: boolean = true;
	public transactionRecorsNextUrl: string = '';

	constructor(private dashboardService: DashboardService, private auth: AuthService) { }

	ngOnInit() {
		this.currencySymbol = this.auth.getCurrencySymbol(); //set currency symbol
	}


	ngAfterViewInit() {
		this.fetchAccountDetails();
	}


	/** fetch account details */
	private fetchAccountDetails() {

		if(!this.transactionRecorsHasMore) {
			return false;
		}

		this.transactionRecordsLoading = true;
		this.dashboardService.getAccountDetails(this.transactionRecorsNextUrl).subscribe( (data) => {
			this.accountBalance = data.account_balance;

			this.transactionRecords = this.transactionRecords.concat(data.transactions);
			
			this.transactionRecorsNextUrl = data.paging.next_page_url;
			this.transactionRecorsHasMore = data.paging.has_more;
			this.transactionRecordsLoading = false;

		});

	}



}
