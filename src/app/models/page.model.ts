import Category from "./category.model";
import ProductMini from "./product-mini.model";
import Product from "./product.model";
import User from "./user.model";

export default class Page {

	public readonly name!: string;
	public readonly version!: number;
	public readonly strings!: string[][];
	public readonly productsMini!: ProductMini[][];
	public readonly products!: Product[][];
	public readonly categories!: Category[][];
	public readonly users!: User[][];

	public constructor(
		name: string = '',
		version: number = 0,
		strings: string[][] = [],
		productsMini: ProductMini[][] = [],
		products: Product[][] = [],
		categories: Category[][] = [],
		users: User[][] = []
	) {
		this.name = name;
		this.version = version;
		this.strings = strings;
		this.productsMini = productsMini;
		this.products = products;
		this.categories = categories;
		this.users = users;
	}
}
