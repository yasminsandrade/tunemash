export const environment = {
  production: true
};

export const SpotifyConfiguration = {
	clientId: 'bbbc4da6d22c495e8fb32f6430212b72',
	authEndpoint: 'https://accounts.spotify.com/authorize',
	redirectUrl: 'http://localhost:4200/login/',
	scopes: [
		'user-top-read',
		'playlist-read-private',
		'playlist-read-collaborative',
		'playlist-modify-private',
		'playlist-modify-public',
		'user-library-read',
		'ugc-image-upload',
	],
};
