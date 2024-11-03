import { Injectable } from '@angular/core';
import Product from '../models/product.model'
import ProductMini from '../models/product-mini.model';

@Injectable({
	providedIn: 'root'
})
export default class ProductPageViewModel {

	public async getProductById(id: number): Promise<Product> {
		//Placeholder
		return new Product(
			1, 'Dominó da Potenciação', 1100, 'Um jogo de dominó da potenciação, um muito legal :)', ['https://i.imgur.com/0kV15x1.jpg', 'https://i.imgur.com/0kV15x1.jpg', 'https://i.imgur.com/0kV15x1.jpg'], 'game', 12, 2, null, null, [1,2]
		);
	}
}
