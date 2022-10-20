import { Subject } from 'rxjs';
import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
	selector: 'loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
	public loading: Subject<boolean> = this.loaderService.isLoading;

	constructor(private loaderService: LoaderService) {}
}
