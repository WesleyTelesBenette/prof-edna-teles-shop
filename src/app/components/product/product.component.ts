import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-product',
	standalone: true,
	imports: [],
	templateUrl: './product.component.html',
	styleUrl: './product.component.scss'
})
export class ProductComponent {
	@Input() title!: string;
	@Input() imageUrl!: string;
	@Input() priceInCents: bigint = BigInt(0);

	public getPrice(): string[] {
		const priceInNumber = Number(this.priceInCents) / 100;
		const priceInString = priceInNumber.toFixed(2);
		const price: string[] = priceInString.split('.');

		return price;
	}
}
