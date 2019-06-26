import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';


@Injectable({
	providedIn: 'root'
})

export class AuthService {

	constructor(private router: Router, private http: HttpClient, private notifier:NotifierService) { }



	/** store access token to localstorage */
	public saveAccessToken(token: string) {
		localStorage.setItem('driver_access_token', token);
	}

	/** remove access token from local storage */
	public removeAccessToken() {
		localStorage.removeItem('driver_access_token');
	}


	/** get access token */
	public getAccessToken() {
		return localStorage.getItem('driver_access_token');
	}


	/** save login data in local storage */
	public saveLoginData(data: any) {
		this.saveAccessToken(data.access_token);
		localStorage.setItem('user_info', JSON.stringify(data.driver));
		localStorage.setItem('currency_symbol', data.currency_symbol);
	}

	/** remove login data */
	public removeLoginData() {
		this.removeAccessToken();
		localStorage.removeItem('currency_symbol');
		localStorage.removeItem('user_info');
	}

	/** get currency symbol */
	public getCurrencySymbol() {
		return localStorage.getItem('currency_symbol');
	}


	/** get user data */
	public getUserData() {
		return JSON.parse( localStorage.getItem('user_info') );
	}




	/**
	 * call login api and return response
	 */
	public doLogin(countryCode, mobileNumber, password) {

		let data = { country_code : countryCode, mobile_number : mobileNumber, password : password };

		return this.http.post(environment.apiEndpoints.login, data)
			.pipe(
				catchError( (error: any) => {
					console.log('AuthService@doLogin, error : ', error);
					this.notifier.notify( 'error', 'Something bad happened; please try again later.' );
					return throwError('Something bad happened. please try again later.');
				})
			);

	}

	/** 
	 * check user authenticated
	 * return boolean
	 */
	public isAuthenticated()
	{
		return !!this.getAccessToken();
	}


	/** redirect to dashboard */
	public redirectDashboard() {
		this.router.navigate(['']);
	}




	/**
	 * logout user and redirect to login page
	 */
	public doLogout():void {
		this.removeLoginData();
		this.router.navigate(['auth/login']);
	}


}
