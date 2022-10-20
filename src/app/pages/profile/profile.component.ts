import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
	user: User;

	constructor(private spotifyService: SpotifyService) {}

	ngOnInit(): void {
		this.spotifyService.getUser().then((res) => {
			this.user = res;
		});
	}

	logout() {
		localStorage.clear();
		window.location.href = 'https://accounts.spotify.com/pt-BR/logout';
	}
}
