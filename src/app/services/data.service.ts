import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	private dashboardNavbarHeadingSource = new BehaviorSubject('dashboard-navbar-heading');
	public dashboardNavbarHeadingMessage = this.dashboardNavbarHeadingSource.asObservable();

	constructor() { }

	public setHeaderText(message: string) {
		this.dashboardNavbarHeadingSource.next(message);
	}

}
