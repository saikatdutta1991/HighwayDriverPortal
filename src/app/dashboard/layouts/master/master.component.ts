import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-master',
	templateUrl: './master.component.html',
	styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

	constructor(private auth: AuthService) { }

	ngOnInit() {
	}

	/** when user clicks logout button on logout modal*/
	public doLogout() {
		this.auth.doLogout();
	}

	/** logout from all devices */
	public doLogoutFromAllDevices() {
		this.auth.doLogout(true);	
	}

}
