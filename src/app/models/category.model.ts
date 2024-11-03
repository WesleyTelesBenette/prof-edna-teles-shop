
export default class Category
{
	public readonly id!: number;
	public readonly name!: string;
	public readonly imageUrl!: string;

	public constructor(
		id: number,
		name: string,
		imageUrl: string
	) {
		this.id = id;
		this.name = name;
		this.imageUrl = imageUrl;
	}
}
