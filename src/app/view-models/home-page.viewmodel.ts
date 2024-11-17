import { Injectable } from '@angular/core';
import RequestApiService, { ApiResponse } from '../services/request-api.service';
import Page from '../models/page.model';

@Injectable({
	providedIn: 'root'
})
export class HomePageViewModel {

	private url = 'https://prof-edna-teles-shop-api.onrender.com';

	public constructor(private readonly _requestService: RequestApiService) {}

	public async getPageContent(): Promise<ApiResponse<Page>> {
		return await this._requestService.request<Page>(this.url, 'get', null, 'page/home', null);
	}

	// public async getRecentProducts(): Promise<ApiResponse<ProductMini>> {
	// 	return await this._requestService.request<ProductMini>(this.url, 'get', null, 'product/recent/10', null);
	// }

	// public async getProductCategories(): Promise<ApiResponse<Category>> {
	// 	return await this._requestService.request<Category>(this.url, 'get', null, 'category/', null);
	// }

	// public async getBestSellers(): Promise<ApiResponse<ProductMini>> {
	// 	return await this._requestService.request<ProductMini>(this.url, 'get', null, 'product/random/10', null);
	// }

	// public async getGameCategories(): Promise<ApiResponse<string>> {
	// 	return await this._requestService.request<string>(this.url, 'get', null, 'product/types', null);
	// }

	// public async getRecommendations(): Promise<ApiResponse<ProductMini>> {
	// 	return await this._requestService.request<ProductMini>(this.url, 'get', null, 'product/random/10', null);
	// }
}
