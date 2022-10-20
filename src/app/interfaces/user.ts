export interface User {
	id: string;
	name: string;
	avatarUrl: string;
	followers?: number;
	spotifyUrl?: string;
	email?: string;
	birthdate?: string;
}
