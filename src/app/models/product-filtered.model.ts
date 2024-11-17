import ProductMini from "./product-mini.model";

export default class ProductFiltered
{
	public readonly length!: number;
	public readonly products!: ProductMini[];

	public constructor(
		length: number,
		products: ProductMini[]
	) {
		this.length = length;
		this.products = products;
	}
}
