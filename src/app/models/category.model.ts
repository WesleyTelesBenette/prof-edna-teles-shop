
export default class Category
{
	public readonly id!: number;
	public readonly name!: string;

	public constructor(
		id: number,
		name: string,
	) {
		this.id = id;
		this.name = name;
	}
}
