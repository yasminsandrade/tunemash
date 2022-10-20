import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutes } from './contact.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from 'src/app/services/email.service';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
	declarations: [ContactComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(ContactRoutes),
		ReactiveFormsModule,
		HttpClientModule,
		NgxLoadingModule.forRoot({
			fullScreenBackdrop: true,
		}),
	],
	providers: [EmailService],
})
export class ContactModule {}
