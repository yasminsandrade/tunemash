import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectArtistComponent } from 'src/app/pages/home/select-artist/select-artist.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SafePipe } from 'src/app/shared/safe.pipe';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
	declarations: [
		HomeComponent,
		SelectArtistComponent,
		PlaylistComponent,
		SafePipe,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(HomeRoutes),
		ReactiveFormsModule,
		NgxLoadingModule.forRoot({
			fullScreenBackdrop: true
		})
	],
})
export class HomeModule {}
