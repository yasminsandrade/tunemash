import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { SelectArtistComponent } from './select-artist/select-artist.component';
import { PlaylistComponent } from './playlist/playlist.component';
export const HomeRoutes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'artistas',
		component: SelectArtistComponent,
	},
	{
		path: 'playlist/:id',
		component: PlaylistComponent,
	},
];
