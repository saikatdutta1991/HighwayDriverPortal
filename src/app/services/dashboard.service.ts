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
