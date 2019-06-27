import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	public drivername: string; 
	public driverphotourl: string;

	constructor(private auth: AuthService) { }

	ngOnInit() {
		let userdata = this.auth.getUserData();
		this.drivername = `${userdata.fname} ${userdata.lname}`;
		this.driverphotourl = userdata.profile_photo_url;
	}

}
