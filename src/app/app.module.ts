import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotifierModule } from 'angular-notifier';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		NotifierModule.withConfig({
			position : {
				horizontal: {
					position: 'right'
				  },
				  vertical: {
					position: 'bottom'
				  }
			},
			behaviour: {
				autoHide: 3000,
				onMouseover: 'pauseAutoHide',
				showDismissButton: true
			}
		}),
		//NotifierModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
