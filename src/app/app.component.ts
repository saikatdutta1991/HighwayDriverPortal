import { Component } from '@angular/core';
declare var $;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'HighwayDriverPortal';

	ngAfterViewInit() {
		$(".bird-wrapper").fadeOut();
	}

}
