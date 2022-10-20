// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
