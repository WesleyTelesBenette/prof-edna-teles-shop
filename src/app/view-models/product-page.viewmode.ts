import { Injectable } from "@angular/core";
import Product from "../models/product.model";
import GamePack from "../models/game-pack.model";

@Injectable({
	providedIn: 'root'
})
export default class GamePackPageViewModel {

	public async getGamePackById(id: number): Promise<GamePack> {
		//Placeholder
		return new GamePack(
			25, 'Dominó da Equação de 2º Grau', 1200,
			'Jogo muito legal, slk... melhor jogo do mundo slk mano ahaha muito legal vou comprar agora mesmo bora lá galera do zap zap negócio é legal mermo',
			[
				'https://i.imgur.com/0kV15x1.jpg',
				'https://i.imgur.com/0kV15x1.jpg',
				'https://i.imgur.com/0kV15x1.jpg',
				'https://i.imgur.com/0kV15x1.jpg',
				'https://i.imgur.com/0kV15x1.jpg',
				'https://i.imgur.com/0kV15x1.jpg',
				'https://i.imgur.com/0kV15x1.jpg',
				'https://i.imgur.com/0kV15x1.jpg',
				'https://i.imgur.com/0kV15x1.jpg'
			],
			'game', 24, 4, null, null
		);
	}
}
