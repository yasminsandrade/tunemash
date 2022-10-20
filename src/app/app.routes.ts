import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const AppRoutes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule),
		canLoad: [AuthGuard]
	},
	{
		path: 'login',
		loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule),
	},
	{
		path: 'como-funciona',
		loadChildren: () => import('./pages/how-works/how-works.module').then(x => x.HowWorksModule),
	},
	{
		path: 'contato',
		loadChildren: () => import('./pages/contact/contact.module').then(x => x.ContactModule),
	},
	{
		path: 'perfil',
		loadChildren: () => import('./pages/profile/profile.module').then(x => x.ProfileModule),
		canLoad: [AuthGuard]
	},
];
