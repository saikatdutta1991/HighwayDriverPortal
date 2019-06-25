import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

	constructor(private auth : AuthService, private router: Router) { }

	/** 
	 * check if route can activate or not, else redirect to auth routes 
	 * */
	canActivate(): boolean {
		
		if(this.auth.isAuthenticated()) {
			return true;
		}

		this.auth.doLogout();
		return false;

	}

}
