import { Injectable } from '@angular/core';
import Category from '../models/category.model';
import ProductMini from '../models/product-mini.model';

@Injectable({
	providedIn: 'root'
})
export class HomePageViewModel {

	public async getRecentPacks(): Promise<ProductMini[]> {
		//...

		//Placeholder
		return [
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game')
		];
	}

	public async getPackCategories(): Promise<Category[]> {
		//...

		//Placeholder
		return [
			new Category(0, 'Ensino Fundamental I', 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg'),
			new Category(0, 'Ensino Fundamental II', 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg'),
			new Category(0, 'Ensino Médio', 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg'),
			new Category(0, 'Todos os Jogos', 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg'),
		];
	}

	public async getBestSellers(): Promise<ProductMini[]> {
		//...

		//Placeholder
		return [
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game')
		];
	}

	public async getGameCategories(): Promise<Category[]> {
		//...

		//Placeholder
		return [
			new Category(0, 'Dominó', 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg'),
			new Category(0, 'Jogo da Memória', 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg'),
			new Category(0, 'Uno', 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg'),
			new Category(0, 'Tabuleiro', 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg'),
			new Category(0, 'Bingo', 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg'),
			new Category(0, 'Charada', 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg'),
			new Category(0, 'Jogo da Memória', 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg'),
			new Category(0, 'Dominó', 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg'),
		];
	}

	public async getRecommendations(): Promise<ProductMini[]> {
		//...

		//Placeholder
		return [
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://res.cloudinary.com/dnchjuhxp/image/upload/v1730595103/test/y8wfzcrmyx1doweyrsfz.jpg', 'game')
		];
	}
}
