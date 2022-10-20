import { SpotifyService } from './../services/spotify.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanLoad {
	constructor(
		private router: Router,
		private spotifyService: SpotifyService
	) {}

	canLoad( route: Route, segments: UrlSegment[]):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {

		const token = localStorage.getItem('token');

		if (!token) {
			return this.cantAccess();
		}

		return new Promise(async (res) => {
			const userCreated = await this.spotifyService.initService();
			if (userCreated) {
				res(true);
			} else {
				res(this.cantAccess());
			}
		});
	}

	cantAccess() {
		localStorage.clear();
		this.router.navigate(['/login']);
		return false;
	}
}
