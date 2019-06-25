import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';
import { ViewEncapsulation } from '@angular/core';
import { NotifierService } from 'angular-notifier';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {

	private host: string;
	private websitename: string;

	private telInputObj:any;
	private password: string;

	constructor(private title: Title, private notifier:NotifierService) {
		this.host = environment.host;
		this.websitename = environment.websiteName;
	}

	ngOnInit(): void {
		this.title.setTitle(`${this.websitename} - Driver Portal Login`);
	}


	/**
	 * on login submit call login api and check errors
	 */
	onLoginSubmit() {
		console.log(this.telInputObj.getNumber(), this.password)
		//this.notifier.notify( 'error', 'You are awesome! I mean it!' );
	}

	telInputObject(obj) {
		this.telInputObj = obj;
	}

	
}
