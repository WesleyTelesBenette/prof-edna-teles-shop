import Product from "../models/product.model";
import RequestApiService, { ApiResponse } from "./request-api.service";

export default class ProductService {

	private readonly _apiUrl = 'https://prof-edna-teles-shop-api.onrender.com';
	private readonly _apiBaseRoute = 'product/';

	public constructor(private readonly _requestService: RequestApiService) { }

	public async getAll(): Promise<ApiResponse<Product>> {
		return await this._requestService.request<Product>(this._apiUrl, 'get', null, this._apiBaseRoute, null);
	}
}
