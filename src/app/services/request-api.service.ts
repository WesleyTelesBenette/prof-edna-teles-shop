
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

export class ApiResponse<T> {
	constructor (
		public readonly statusCode: number,
		public readonly content: T[]
	) {}
}

@Injectable({
	providedIn: 'root'
})
export default class RequestApiService {

	constructor(private readonly _http: HttpClient) {}

	public async request<T>(
		apiUrl: string,
		requestType: 'get' | 'post' | 'put' | 'delete',
		headerContent: { [name: string]: string } | null,
		route: string,
		bodyContent: object | null
	): Promise<ApiResponse<T>> {

		let url: string = `${apiUrl}/${route}`;
		let request: Observable<HttpResponse<T[] | null>>;
		let httpHeader = new HttpHeaders(headerContent ?? {});
		let bodyObject = bodyContent ?? {};

		try {
			switch(requestType) {
				case 'get':    { request = this.getRequest(url, httpHeader);              break; }
				case 'post':   { request = this.postRequest(url, httpHeader, bodyObject); break; }
				case 'put':    { request = this.putRequest(url, httpHeader, bodyObject);  break; }
				case 'delete': { request = this.deleteRequest(url, httpHeader);           break; }
				default:       { throw new Error('Tipo de requisição inválido.');                       }
			}

			return await new Promise<ApiResponse<T>>((response, reject) => {
				request.subscribe({
					next: (responseForRequest: HttpResponse<T[] | null>) => {

						const statusCode: number = responseForRequest.status;
						const body: T[] | null = (Array.isArray(responseForRequest.body))
							? responseForRequest.body
							: (responseForRequest.body != null) ? [responseForRequest.body] : null;

						if ((statusCode <= 299) && (body !== null)) {

							if (body[0] as T)
								response(new ApiResponse<T>(statusCode, body));

							reject(new Error(`${statusCode}`));
						}

						response(new ApiResponse(statusCode, [])); //resposta boa ou ruim, mas sem corpo
					},
					error: (err: any) => {

						console.error('Erro na requisição:', err);

						if (err instanceof HttpErrorResponse)
							reject(err.status);

						reject(500);
					}
				})
			});
		}
		catch(e: any) {
			const errorCode = typeof e === 'number' ? e : parseFloat(e);
			const responseCode = (!isNaN(errorCode)) ? errorCode : 500;

			return new ApiResponse(responseCode, []);
		}
	}

	private getRequest(url: string, header: HttpHeaders): Observable<HttpResponse<any>> {
		return this._http.get(url, { headers: header, observe: 'response' });
	}

	private postRequest(url: string, header: HttpHeaders, bodyObject: object): Observable<HttpResponse<any>> {
		return this._http.post(url, bodyObject, { headers: header, observe: 'response' });
	}

	private putRequest(url: string, header: HttpHeaders, bodyObject: object): Observable<HttpResponse<any>> {
		return this._http.put(url, bodyObject, { headers: header, observe: 'response' });
	}

	private deleteRequest(url: string, header: HttpHeaders): Observable<HttpResponse<any>> {
		return this._http.delete(url, { headers: header, observe: 'response' });
	}
}
