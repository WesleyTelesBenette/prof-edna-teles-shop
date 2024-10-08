import Game from "./game.model";
import Product from "./product.model";

export default class Pack extends Product
{
	public readonly gameCovers!: string[];
	public readonly description!: string;
	public readonly packDetails!: PackDetails;

	public constructor(
		id: number,
		name: string,
		price: number,
		coverImage: string,
		gameCovers: string[],
		description: string,
		packDetails: PackDetails
	) {
		super(id, name, price, coverImage);

		this.gameCovers = gameCovers;
		this.description = description;
		this.packDetails = packDetails;
	}
}

export class PackDetails
{
	public readonly totalGames!: number;
	public readonly includeGames!: Game[];

	public constructor(totalGames: number, includeGames: Game[])
	{
		this.totalGames = totalGames;
		this.includeGames = includeGames;
	}
}
