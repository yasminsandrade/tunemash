import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	@Input() avatarUrl: string;
	@Input() token: string;
	showMobileMenu: boolean = false;

	constructor(private router: Router) {}

	ngOnInit(): void {}

	toRoute() {
		this.router.navigate(['perfil']);
	}
}
