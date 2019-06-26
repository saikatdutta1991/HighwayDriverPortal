import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	private headerText: string;
	private logo: string;

	constructor() { }

	ngAfterViewInit() {
		import("src/assets/js/sb-admin-2.min.js"); //import js for sidebar
	}

	ngOnInit() {
		this.headerText = `Driver Portal`;
		this.logo = environment.logoUrl;
	}

}
