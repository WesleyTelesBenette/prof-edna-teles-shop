import Product from "./product.model";

export default class Game extends Product
{
	public readonly description!: string;
	public readonly details!: GameDetails;

	public constructor(
		id: number,
		name: string,
		price: number,
		coverImage: string,
		description: string,
		details: GameDetails
	) {
		super(id, name, price, coverImage);

		this.description = description;
		this.details = details;
	}
}

export class GameDetails
{
	public readonly totalPieces!: number;
	public readonly totalPlayers!: number;

	public constructor(totalPieces: number, totalPlayers: number)
	{
		this.totalPieces = totalPieces;
		this.totalPlayers = totalPlayers;
	}
}
