import { Component, ElementRef, OnInit } from '@angular/core';

import { SessionService } from './core.service/session.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'jenny';
	public version: string;
	public webApiEndPoint: string;
	public imagesDirectory: string;

	constructor(private sessionService: SessionService, private elementRef: ElementRef) {

		let native = this.elementRef.nativeElement;
		this.webApiEndPoint = native.getAttribute("webApiEndPoint");
		sessionService.apiServer = this.webApiEndPoint;

		this.imagesDirectory = native.getAttribute("imagesDirectory");

	}

	ngOnInit() {
		this.sessionService.version = this.version;
	}
}
