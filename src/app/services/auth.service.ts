import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
	providedIn: 'root'
})

export class AuthService {

	constructor(private router: Router, private http: HttpClient) { }

	/**
	 * call login api and return response
	 */
	public doLogin() {
		//this.http.post(environment.apiEndpoints.login, {})
	}

	/** 
	 * check user authenticated
	 * return boolean
	 */
	public isAuthenticated()
	{
		return false;
	}

	/**
	 * logout user and redirect to login page
	 */
	public doLogout():void {
		this.router.navigate(['auth/login']);
	}


}
