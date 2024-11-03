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
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game')
		];
	}

	public async getPackCategories(): Promise<Category[]> {
		//...

		//Placeholder
		return [
			new Category(0, 'Ensino Fundamental I', 'https://i.imgur.com/0kV15x1.jpg'),
			new Category(0, 'Ensino Fundamental II', 'https://i.imgur.com/0kV15x1.jpg'),
			new Category(0, 'Ensino Médio', 'https://i.imgur.com/0kV15x1.jpg'),
			new Category(0, 'Todos os Jogos', 'https://i.imgur.com/0kV15x1.jpg'),
		];
	}

	public async getBestSellers(): Promise<ProductMini[]> {
		//...

		//Placeholder
		return [
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game')
		];
	}

	public async getGameCategories(): Promise<Category[]> {
		//...

		//Placeholder
		return [
			new Category(0, 'Dominó', 'https://i.imgur.com/0kV15x1.jpg'),
			new Category(0, 'Jogo da Memória', 'https://i.imgur.com/0kV15x1.jpg'),
			new Category(0, 'Uno', 'https://i.imgur.com/0kV15x1.jpg'),
			new Category(0, 'Tabuleiro', 'https://i.imgur.com/0kV15x1.jpg'),
			new Category(0, 'Bingo', 'https://i.imgur.com/0kV15x1.jpg'),
			new Category(0, 'Charada', 'https://i.imgur.com/0kV15x1.jpg'),
			new Category(0, 'Jogo da Memória', 'https://i.imgur.com/0kV15x1.jpg'),
			new Category(0, 'Dominó', 'https://i.imgur.com/0kV15x1.jpg'),
		];
	}

	public async getRecommendations(): Promise<ProductMini[]> {
		//...

		//Placeholder
		return [
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game'),
			new ProductMini(0, 'Dominó da Porcentagem', 4999, [], 'https://i.imgur.com/0kV15x1.jpg', 'game')
		];
	}
}
