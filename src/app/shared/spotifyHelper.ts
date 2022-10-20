import { User } from '../interfaces/user';
import { Artist } from '../interfaces/artist';
import { Track } from '../interfaces/track';
import { Playlist } from '../interfaces/playlist';

export function SpotifyUserAssign( user: SpotifyApi.CurrentUsersProfileResponse ): User {

	let newUser = {
		id: user.id,
		name: user.display_name,
		avatarUrl: user.images.length > 0 ? user.images.pop().url : '',
		followers: user.followers.total,
		spotifyUrl: user.href,
		email: user.email,
		birthdate: user.birthdate,
	};

	return newUser;
}

export function SpotifyArtistAssign( artists: SpotifyApi.ArtistObjectFull[] ): Artist[] {
	let response: Artist[] = [];

	artists.forEach((el) => {
		let newArtist: Artist = {
			id: el.id,
			name: el.name,
			photoUrl: el.images.length > 0 ? el.images[0].url : '',
		};
		response.push(newArtist);
	});

	return response;
}

export function SpotifyTrackAssign( tracks: SpotifyApi.TrackObjectSimplified[] ): Track[] {
	let response: Track[] = [];

	tracks.forEach((el) => {
		let newTrack: Track = {
			id: el.id,
			name: el.name,
		};
		response.push(newTrack);
	});

	return response;
}

export function SpotifyPlaylistAssign( playlist: SpotifyApi.CreatePlaylistResponse ): Playlist {
	let newPlaylist: Playlist = {
		name: playlist.name,
		id: playlist.id,
		imageUrl: playlist.images.length > 0 ? playlist.images.pop().url : '',
	};

	return newPlaylist;
}

export function SpotifyPlaylistsAssign( playlists: SpotifyApi.PlaylistObjectSimplified[] ): Playlist[] {
	let response: Playlist[] = [];

	playlists.forEach((el) => {
		let newPlaylist: Playlist = {
			name: el.name,
			id: el.id,
			imageUrl: el.images.length > 0 ? el.images.pop().url : '',
			description: el.description ?? '',
			public: el.public,
		};
		response.push(newPlaylist);
	});
	return response;
}
