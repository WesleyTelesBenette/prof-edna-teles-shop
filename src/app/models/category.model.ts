
export default class Category
{
	public readonly name!: string;
	public readonly imageUrl!: string;
	public readonly linkUrl!: string;

	public constructor(
		name:     string,
		imageUrl: string,
		linkUrl:  string
	) {
		this.name = name;
		this.imageUrl = imageUrl;
		this.linkUrl = linkUrl;
	}
}
