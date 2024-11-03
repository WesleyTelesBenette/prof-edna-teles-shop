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
			1, 'Dominó da Potenciação', 1100, 'Um jogo de dominó da potenciação, um muito legal :)', ['https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg'], 'game', 12, 2, null, null, [1,2]
		);
	}
}
