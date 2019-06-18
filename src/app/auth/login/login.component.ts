import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, OnDestroy, Renderer2 } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Title } from '@angular/platform-browser';




@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	hosturl:string;

	constructor(
		@Inject(DOCUMENT) private document: Document, 
		private renderer: Renderer2,
		private title:Title
	) { 
		this.hosturl = environment.host;
	}

	ngOnInit(): void {
		this.title.setTitle(`${environment.websiteName} - driver portal lognin`);
        //this.renderer.addClass(this.document.body, 'bg-gradient-primary');
    }

    ngOnDestroy(): void {
        //this.renderer.removeClass(this.document.body, 'bg-gradient-primary');
    }

}
