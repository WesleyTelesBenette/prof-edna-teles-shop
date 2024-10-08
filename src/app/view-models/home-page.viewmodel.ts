import { Injectable } from "@angular/core";
import Category from "../models/category.model";
import Product from "../models/product.model";

@Injectable({
	providedIn: 'root'
})
export class HomePageViewModel {

	public async getRecentPacks(): Promise<Product[]> {
		//...

		//Placeholder
		return [
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
		];
	}

	public async getPackCategories(): Promise<Category[]> {
		//...

		//Placeholder
		return [
			new Category('Ensino Fundamental I', 'https://i.imgur.com/0kV15x1.jpg', '#'),
			new Category('Ensino Fundamental II', 'https://i.imgur.com/0kV15x1.jpg', '#'),
			new Category('Ensino Médio', 'https://i.imgur.com/0kV15x1.jpg', '#'),
			new Category('Todos os Jogos', 'https://i.imgur.com/0kV15x1.jpg', '#'),
		];
	}

	public async getBestSellers(): Promise<Product[]> {
		//...

		//Placeholder
		return [
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
		];
	}

	public async getGameCategories(): Promise<Category[]> {
		//...

		//Placeholder
		return [
			new Category('Dominó', 'https://i.imgur.com/0kV15x1.jpg', '#'),
			new Category('Jogo da Memória', 'https://i.imgur.com/0kV15x1.jpg', '#'),
			new Category('Uno', 'https://i.imgur.com/0kV15x1.jpg', '#'),
			new Category('Tabuleiro', 'https://i.imgur.com/0kV15x1.jpg', '#'),
			new Category('Bingo', 'https://i.imgur.com/0kV15x1.jpg', '#'),
			new Category('Charada', 'https://i.imgur.com/0kV15x1.jpg', '#'),
			new Category('Jogo da Memória', 'https://i.imgur.com/0kV15x1.jpg', '#'),
			new Category('Dominó', 'https://i.imgur.com/0kV15x1.jpg', '#'),
		];
	}

	public async getRecommendations(): Promise<Product[]> {
		//...

		//Placeholder
		return [
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
			new Product(0, 'Dominó da Porcentagem', 4999, 'https://i.imgur.com/0kV15x1.jpg'),
		];
	}
}
