import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SessionService } from './core.service/session.service';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule
	],
	providers: [SessionService],
	bootstrap: [AppComponent]
})
export class AppModule { }
