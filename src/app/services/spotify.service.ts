import { SpotifyConfiguration } from './../../environments/environment';
import { Injectable } from '@angular/core';
import Spotify from 'spotify-web-api-js';
import { User } from '../interfaces/user';
import { Track } from '../interfaces/track';
import {
	SpotifyUserAssign,
	SpotifyArtistAssign,
	SpotifyTrackAssign,
	SpotifyPlaylistAssign,
	SpotifyPlaylistsAssign,
} from '../shared/spotifyHelper';
import { Playlist } from '../interfaces/playlist';

@Injectable({
	providedIn: 'root',
})
export class SpotifyService {
	spotifyApi: Spotify.SpotifyWebApiJs = null;
	user: User;

	constructor() {
		this.spotifyApi = new Spotify();
	}

	async initService() {
		if (!!this.user) {
			return true;
		}

		const token = localStorage.getItem('token');
		if (!token) {
			return false;
		}

		try {
			this.setAccessToken(token);
			await this.getUser();
			return !!this.user;
		} catch (error) {
			return false;
		}
	}

	async getUser() {
		await this.spotifyApi.getMe().then(
			(res) => {
				this.user = SpotifyUserAssign(res);
				localStorage.setItem('user name', this.user.name);
				localStorage.setItem('user avatar', this.user.avatarUrl);
			},
			(error) => {
				console.log(error.responseMessage);
				localStorage.removeItem('token');
				localStorage.removeItem('user name');
				localStorage.removeItem('user avatar');
			}
		);
		return this.user;
	}

	getLoginUrl() {
		const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
		const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
		const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
		const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
		const responseType = 'response_type=token&show_dialog=true';
		return authEndpoint + clientId + redirectUrl + scopes + responseType;
	}

	getCallback() {
		if (window.location.hash) {
			const params = window.location.hash.substring(1).split('&');
			return params[0].split('=')[1];
		} else {
			return '';
		}
	}

	setAccessToken(token: string) {
		this.spotifyApi.setAccessToken(token);
		localStorage.setItem('token', token);
	}

	async searchArtistByQuery(query) {
		let artists;
		await this.spotifyApi.searchArtists(query).then((res) => {
			artists = SpotifyArtistAssign(res.artists.items);
		});
		return artists;
	}

	async getTracks(id): Promise<Track[]> {
		let tracks: Track[];
		await this.spotifyApi.getArtistTopTracks(id, 'BR').then((res) => {
			tracks = SpotifyTrackAssign(res.tracks);
		});
		return tracks;
	}

	async createPlaylist(id, name, isPublic) {
		let playlistUrl;
		let options = {
			name: name,
			description: 'Playlist criada com o TuneMash',
			public: isPublic,
		};
		await this.spotifyApi.createPlaylist(id, options).then((res) => {
			playlistUrl = SpotifyPlaylistAssign(res);
		});

		return playlistUrl;
	}

	async setTracksOnPlaylist(tracks, playlistId) {
		await this.spotifyApi
			.addTracksToPlaylist(playlistId, tracks)
			.then((res) => {
				return res;
			});
	}

	async getUserPlaylists(username) {
		let playlists: Playlist[];
		await this.spotifyApi.getUserPlaylists(username).then((res) => {
			playlists = SpotifyPlaylistsAssign(res.items);
		});
		return playlists;
	}
}
