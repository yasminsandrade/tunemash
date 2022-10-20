import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class EmailService {
	private url = 'https://mailthis.to/tunemash';

	constructor(private http: HttpClient) {}

	sendEmail(data: any) {
		return this.http.post(this.url, data, { responseType: 'text' }).pipe(
			map(
				(res) => {
					if (res) {
						return res;
					}
				},
				(error: any) => {
					return error;
				}
			)
		);
	}
}
