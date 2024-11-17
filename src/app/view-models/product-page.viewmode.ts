import { Injectable } from '@angular/core';
import Product from '../models/product.model'
import RequestApiService, { ApiResponse } from '../services/request-api.service';

@Injectable({
	providedIn: 'root'
})
export default class ProductPageViewModel {

	private url = 'https://prof-edna-teles-shop-api.onrender.com';

	public constructor(private readonly _requestService: RequestApiService) {}

	public async getProductById(id: number): Promise<ApiResponse<Product>> {
		return await this._requestService.request<Product>(this.url, "get", null, `product/${id}`, null);
	}
}
