import { Component, Input, OnInit } from '@angular/core';
import ProductMini from '../../models/product-mini.model';

@Component({
	selector: 'app-product',
	standalone: true,
	imports: [],
	templateUrl: './product.component.html',
	styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
	@Input() product!: ProductMini;
	public priceInteger!: string;
	public priceDecimal!: string;

	public ngOnInit(): void {
		this.setPrices();
	}

	public setPrices(): void {
		const priceInNumber = Number(this.product.priceInCents) / 100;
		const priceInString = priceInNumber.toFixed(2);

		[this.priceInteger, this.priceDecimal] = priceInString.split('.');
	}
}
