import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class RestApiService {
	httpHeaders = new HttpHeaders()
		.set('content-type', '*')
		.set('Access-Control-Allow-Origin', 'http://localhost:4200')
		.set('Access-Control-Allow-Origin', '*');

	apiUrl: string =
		'https://script.google.com/macros/s/AKfycbyyLkbafaMAdmuBQmrofvHQAlYyfGoEVjlALbpCHCxkLssgplcs04TvCPYJyeBI3lLHtg/exec';

	constructor(private http: HttpClient) {}

	postEmail(data): Observable<any> {
		return this.http
			.post<any>(this.apiUrl, data, { headers: this.httpHeaders })
			.pipe();
	}
}
