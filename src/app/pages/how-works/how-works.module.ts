import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowWorksComponent } from './how-works.component';
import { HowWorksRoutes } from './how-works.routes';

@NgModule({
	declarations: [HowWorksComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(HowWorksRoutes)
	],
})
export class HowWorksModule {}
