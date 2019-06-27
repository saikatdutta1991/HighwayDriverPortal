import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-payouts',
	templateUrl: './payouts.component.html',
	styleUrls: ['./payouts.component.css']
})
export class PayoutsComponent implements OnInit {

	public currencySymbol: string;
	public payoutRecords: Array<any> = [];
	public payoutRecordsLoading: boolean = true;
	public payoutRecorsHasMore: boolean = true;
	public payoutRecorsNextUrl: string = '';

	constructor(private dashboardService: DashboardService, private auth: AuthService) { }

	ngOnInit() {
		this.currencySymbol = this.auth.getCurrencySymbol(); //set currency symbol
	}

	ngAfterViewInit() {
		this.fetchPayouts();
	}


	/** get payouts details */
	public fetchPayouts() {

		if(!this.payoutRecorsHasMore) {
			return false;
		}

		this.payoutRecordsLoading = true;
		this.dashboardService.getPayoutsDetails(this.payoutRecorsNextUrl).subscribe( (data) => {
			this.payoutRecords = this.payoutRecords.concat(data.records);
			
			this.payoutRecorsNextUrl = data.paging.next_page_url;
			this.payoutRecorsHasMore = data.paging.has_more;
			this.payoutRecordsLoading = false;

		});
	}




}
