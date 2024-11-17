
export default class ProductMini
{
	public readonly id!: number;
	public readonly name!: string;
	public readonly priceInCents!: number;
	public readonly categoriesIds!: number[];
	public readonly imageCover!: string;
	public readonly type!: 'game' | 'pack';
	public readonly gameType!: string;

	public constructor(
		id: number,
		name: string,
		priceInCents: number,
		categoriesIds: number[],
		imageCover: string,
		type: 'game' | 'pack',
		gameType: string
	) {
		this.id = id;
		this.name = name;
		this.priceInCents = priceInCents;
		this.categoriesIds = categoriesIds;
		this.imageCover = imageCover;
		this.type = type;
		this.gameType = gameType;
	}
}
