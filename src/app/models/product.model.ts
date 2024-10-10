
export default class Product
{
	public readonly id!: number;
	public readonly name!: string;
	public readonly priceInCents!: number;
	public readonly coverImage!: string;

	public constructor(id: number, name: string, priceInCents: number, coverImage: string)
	{
		this.id = id;
		this.name = name;
		this.priceInCents = priceInCents;
		this.coverImage = coverImage;
	}
}
