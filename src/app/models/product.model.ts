
export default class Product
{
	public readonly id!: number;
	public readonly name!: string;
	public readonly priceInCents!: number;
	public readonly description!: string;
	public readonly images!: string[];
	public readonly type!: 'game' | 'pack';
	public readonly totalPieces!: number | null;
	public readonly totalPlayers!: number | null;
	public readonly totalGames!: number | null;
	public readonly includeGamesIds!: number[] | null;
	public readonly categoriesIds!: number[];

	public constructor(
		id: number,
		name: string,
		priceInCents: number,
		description: string,
		images: string[],
		type: 'game' | 'pack',
		totalPieces: number | null,
		totalPlayers: number | null,
		totalGames: number | null,
		includeGamesIds: number[] | null,
		categoriesIds: number[]
	) {
		this.id = id;
		this.name = name;
		this.priceInCents = priceInCents,
		this.description = description;
		this.images = images;
		this.type = type;
		this.totalPieces = totalPieces;
		this.totalPlayers = totalPlayers;
		this.totalGames = totalGames;
		this.includeGamesIds = includeGamesIds;
		this.categoriesIds = categoriesIds;
	}
}
