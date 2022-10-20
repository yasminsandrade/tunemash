import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'TuneMash';
	avatarUrl: string;
	token: string;

	changeOfRoutes() {
		this.avatarUrl = localStorage.getItem('user avatar');
		this.token = localStorage.getItem('token');
	}
}
