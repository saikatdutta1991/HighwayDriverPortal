import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
declare var $;

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	public headerText: string;
	public logo: string;

	constructor() { }

	ngAfterViewInit() {
		import("src/assets/js/sb-admin-2.min.js"); //import js for sidebar
		this.sidebarToggle();
	}


	/** sidebar toggle event */
	private sidebarToggle() {
	
		if( $(window).width() < 768) {
			$("body").addClass('sidebar-toggled');
			$('#accordionSidebar').addClass('toggled');
		} 
		/** if screen size if more */
		else if( $(window).width() >= 768) {
			$("body").removeClass('sidebar-toggled');
			$('#accordionSidebar').removeClass('toggled');
		}

	}



	ngOnInit() {
		this.headerText = `Driver Portal`;
		this.logo = environment.logoUrl;
	}

}
