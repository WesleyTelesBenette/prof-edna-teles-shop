
export default class Product
{
	public readonly id!: number;
	public readonly name!: string;
	public readonly price!: number;
	public readonly coverImage!: string;

	public constructor(id: number, name: string, price: number, coverImage: string)
	{
		this.id = id;
		this.name = name;
		this.price = price;
		this.coverImage = coverImage;
	}
}
