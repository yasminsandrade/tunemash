import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Artist } from 'src/app/interfaces/artist';
import { Track } from 'src/app/interfaces/track';
import { Playlist } from 'src/app/interfaces/playlist';
import { Router } from '@angular/router';

@Component({
	selector: 'app-select-artist',
	templateUrl: './select-artist.component.html',
	styleUrls: ['./select-artist.component.scss'],
})
export class SelectArtistComponent implements OnInit {
	constructor(
		public fb: FormBuilder,
		private spotifyService: SpotifyService,
		private router: Router
	) {}

	form: FormGroup;
	selectedArtists: Artist[];
	artists: Artist[];
	tracks: Track[];
	playlist: Playlist;
	userName: string;
	showAlert: boolean;
	isLoading: boolean = false;
	isLimit: boolean = false;

	ngOnInit(): void {
		this.userName = localStorage.getItem('user name');
		this.form = this.fb.group({
			playlistName: '',
			artist: '',
			isPublic: true,
		});
	}

	async searchArtist(event) {
		this.artists = await this.spotifyService.searchArtistByQuery(
			event.target.value
		);
	}

	selectArtist(artist) {
		if (!this.selectedArtists) this.selectedArtists = [];
		if (this.checkArtist(artist.id)) {
			this.selectedArtists.push(artist);
		} else {
			this.showAlert = true;

			setTimeout(() => {
				this.showAlert = false;
			}, 2500);
		}
		if (this.selectedArtists.length >= 6) {
			this.isLimit = true;
			this.form.controls['artist'].disable();
		}
		this.clear();
	}

	checkArtist(id) {
		return this.selectedArtists.findIndex((a) => a.id == id) < 0;
	}

	clear() {
		this.artists = null;
		this.form.controls['artist'].setValue(null);
	}

	removeArtist(id) {
		this.selectedArtists.splice(
			this.selectedArtists.findIndex(function (a) {
				return a.id === id;
			}),
			1
		);
		if (this.selectedArtists.length <= 5) {
			this.isLimit = false;
			this.form.controls['artist'].enable();
		}
	}

	async sendData() {
		this.isLoading = true;
		await this.getTracks();
		await this.createPlaylist();
		await this.setTracksOnPlaylist();
		this.router.navigate(['home/playlist/' + this.playlist.id]);
	}

	async setTracksOnPlaylist() {
		let uris = [];
		this.tracks.forEach((el) => {
			let str = 'spotify:track:' + el.id;
			uris.push(str);
		});
		await this.spotifyService.setTracksOnPlaylist(uris, this.playlist.id);
	}

	async createPlaylist() {
		let data = this.form.getRawValue();
		let name =
			data.playlistName != '' ? data.playlistName : 'Playlist TuneMash';
		await this.spotifyService
			.createPlaylist(this.userName, name, data.isPublic)
			.then((res) => {
				this.playlist = res;
			});
	}

	async getTracks() {
		this.tracks = [];
		for (let el of this.selectedArtists) {
			await this.spotifyService.getTracks(el.id).then((res) => {
				this.tracks = [...this.tracks, ...res];
				this.shuffleTracks(this.tracks);
			});
		}
	}

	shuffleTracks(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}
}
