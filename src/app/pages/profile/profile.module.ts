import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileRoutes } from './profile.routes';

@NgModule({
	declarations: [ProfileComponent],
	imports: [CommonModule, RouterModule.forChild(ProfileRoutes)],
})
export class ProfileModule {}
