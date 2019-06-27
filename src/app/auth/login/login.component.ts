import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';
import { ViewEncapsulation } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { AuthService } from 'src/app/services/auth.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

	public host: string;
	public websitename: string;

	public telInputObj:any;
	public password: string;

	public isLoginOnProgress: boolean = false;

	public isEyeOpen: boolean = false;

	constructor(private title: Title, private notifier:NotifierService, private auth: AuthService) {
		this.host = environment.host;
		this.websitename = environment.websiteName;
	}

	ngOnInit(): void {
		this.title.setTitle(`${this.websitename} - Driver Portal Login`);
	}


	private getNumber() : any {

		let countryCode = '+' + this.telInputObj.getSelectedCountryData().dialCode;
		let number = this.telInputObj.getNumber().replace(countryCode, '');
		return { countryCode : countryCode, number : number };
	}


	/**
	 * on login submit call login api and check errors
	 */
	onLoginSubmit() {
		
		console.log('onLoginSubmit', this.telInputObj.getNumber(), this.password);

		/** show spinner */
		this.isLoginOnProgress = true;
		
		/** check phone number entered or not */
		if(!this.telInputObj.getNumber()) {
			this.isLoginOnProgress = false;
			return this.notifier.notify( 'error', 'Phone number is required.' );
		}

		// /** check password entered */
		if(!this.password) {
			this.isLoginOnProgress = false;
			return this.notifier.notify( 'error', 'Password is required.' );
		}

		/** call login api */
		let mobile = this.getNumber();
		this.auth.doLogin(mobile.countryCode, mobile.number, this.password).subscribe( (data: any) => {
			
			this.isLoginOnProgress = false;

			console.log('data', data);

			if(!data.success) {
				return this.notifier.notify( 'error', data.text);
			}

			/** store driver data into session */
			this.auth.saveLoginData(data.data);

			/** redirect to dashboard */
			this.notifier.notify( 'success', 'Login success. You will be redirect to dashboard.');
			setTimeout( () => {
				this.auth.redirectDashboard()
			}, 2000 )
			

		});
		


		//this.notifier.notify( 'error', 'You are awesome! I mean it!' );
	}

	telInputObject(obj) {
		this.telInputObj = obj;
	}



	public toggleEye() {
		this.isEyeOpen = !this.isEyeOpen;
	}

	
}
