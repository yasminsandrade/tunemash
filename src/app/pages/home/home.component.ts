import { Router } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	constructor(
		private spotifyService: SpotifyService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.checkToken();
	}

	checkToken() {
		const token = this.spotifyService.getCallback();

		if (!!token) {
			this.spotifyService.setAccessToken(token);
		}
	}

	openLoginPage() {
		window.location.href = this.spotifyService.getLoginUrl();
	}

	toRoute() {
		this.router.navigate(['home/artistas']);
	}
}
