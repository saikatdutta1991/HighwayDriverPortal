import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotifierService } from 'angular-notifier';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class DashboardService {

	constructor(private auth: AuthService, private notifier: NotifierService, private http: HttpClient) { }


	/** fetch account detais */
	public getAccountDetails(nextUrl: string = '') {

		let apiEndpoint = nextUrl ? nextUrl : environment.apiEndpoints.driverAccount;

		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': this.auth.getAccessToken()
			})
		}

		return this.http.get(apiEndpoint, httpOptions)
			.pipe(
				map((response: any) => {
					console.log('DashboardService@getAccountDetails, response : ', response);
					if(!response.success && response.type == 'UNAUTHORIZED') {
						return this.auth.doLogout();
					}
					return response.data;
				}),
				catchError( (error: any) => {
					console.log('DashboardService@getAccountDetails, error : ', error);
					this.notifier.notify( 'error', 'Something bad happened; please try again later.' );
					return throwError('Something bad happened; please try again later.');
				})
			);
	}


	/** fetch payouts details */
	public getPayoutsDetails(nextUrl: string = '') {

		let apiEndpoint = nextUrl ? nextUrl : environment.apiEndpoints.payouts;

		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': this.auth.getAccessToken()
			})
		}

		return this.http.get(apiEndpoint, httpOptions)
			.pipe(
				map((response: any) => {
					console.log('DashboardService@getPayoutsDetails, response : ', response);
					if(!response.success && response.type == 'UNAUTHORIZED') {
						return this.auth.doLogout();
					}
					return response.data;
				}),
				catchError( (error: any) => {
					console.log('DashboardService@getPayoutsDetails, error : ', error);
					this.notifier.notify( 'error', 'Something bad happened; please try again later.' );
					return throwError('Something bad happened; please try again later.');
				})
			);
	}
	



	/** fetch dashboard details */
	public getDashboardDetails() {

		const httpOptions = {
			headers: new HttpHeaders({
				'Authorization': this.auth.getAccessToken()
			})
		}

		return this.http.get(environment.apiEndpoints.dashboard, httpOptions)
			.pipe(
				map((response: any) => {
					console.log('DashboardService@getDashboardDetails, response : ', response);
					if(!response.success && response.type == 'UNAUTHORIZED') {
						return this.auth.doLogout();
					}
					return response.data;
				}),
				catchError( (error: any) => {
					console.log('DashboardService@getDashboardDetails, error : ', error);
					this.notifier.notify( 'error', 'Something bad happened; please try again later.' );
					return throwError('Something bad happened; please try again later.');
				})
			);
	}

}
