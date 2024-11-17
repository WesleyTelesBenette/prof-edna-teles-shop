import { Injectable } from "@angular/core";
import RequestApiService, { ApiResponse } from "../services/request-api.service";
import ProductFiltered from "../models/product-filtered.model";

@Injectable({
	providedIn: 'root'
})
export default class SearchPageViewModel {
	private url = 'https://prof-edna-teles-shop-api.onrender.com';

	public constructor(private readonly _requestService: RequestApiService) {}

	public async getSearch(terms: string, maxProductsForPage: number, indexPage: number): Promise<ApiResponse<ProductFiltered>> {
		return await this._requestService
			.request<ProductFiltered>(this.url, 'get', null, `product/filter/${terms}/${maxProductsForPage}/${indexPage}`, null);
	}
}
