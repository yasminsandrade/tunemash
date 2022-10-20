import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	templateUrl: './playlist.component.html',
	styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
	playlistId: string;
	playlistUrl: string;

	constructor(private aRoute: ActivatedRoute, private router: Router) {}

	ngOnInit(): void {
		this.playlistId = this.aRoute.snapshot.paramMap.get('id');
		this.playlistUrl = `https://open.spotify.com/embed/playlist/${this.playlistId}?theme=0`;
	}

	toRoute() {
		this.router.navigate(['home/artistas']);
	}
}
