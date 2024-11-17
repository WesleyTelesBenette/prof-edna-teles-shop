import { AfterViewInit, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import ProductMini from '../../models/product-mini.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-product',
	standalone: true,
	imports: [],
	templateUrl: './product.component.html',
	styleUrl: './product.component.scss'
})
export class ProductComponent implements AfterViewInit {
	@Input() product!: ProductMini;
	public priceInteger!: string;
	public priceDecimal!: string;
	public image: string = "";

	public constructor(
		private _nav: Router,
		private _cdr: ChangeDetectorRef
	) {}

	public ngAfterViewInit(): void {
		this.setPrices();
		this.setImage();
	}

	public setPrices(): void {
		const priceInNumber = Number(this.product.priceInCents) / 100;
		const priceInString = priceInNumber.toFixed(2);

		[this.priceInteger, this.priceDecimal] = priceInString.split('.');
	}

	public setImage(): void {
		this.image = `./assets/images/products/${this.product.imageCover ?? ''}.jpg`;
		this._cdr.detectChanges();
	}

	public gotoProduct(): void {
		this._nav.navigate(['product/'+this.product.id]);
	}
}
