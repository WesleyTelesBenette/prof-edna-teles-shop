
export default class User
{
	public readonly id!: number;
	public readonly name!: string;
	public readonly email!: string;
	public readonly productsIds!: number[];

	public constructor(
		id: number,
		name: string,
		email: string,
		productsIds: number[]
	) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.productsIds = productsIds;
	}
}
