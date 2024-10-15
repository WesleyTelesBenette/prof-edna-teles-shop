import Product from "./product.model";

export default class GamePack extends Product
{
	public readonly description!: string;
	public readonly images!: string[];
	public readonly type!: 'game' | 'pack';

	public readonly totalPieces!: number | null;
	public readonly totalPlayers!: number | null;

	public readonly totalGames!: number | null;
	public readonly includeGames!: GamePack[] | null;

	public constructor(
		id: number,
		name: string,
		price: number,
		description: string,
		images: string[],
		type: 'game' | 'pack',
		totalPieces: number | null,
		totalPlayers: number | null,
		totalGames: number | null,
		includeGames: GamePack[] | null
	) {
		super(id, name, price, images[0]);

		this.description = description;
		this.images = images;
		this.type = type;

		this.totalPlayers = totalPlayers;
		this.totalPieces = totalPieces;
		this.totalGames = totalGames;
		this.includeGames = includeGames;
	}
}
