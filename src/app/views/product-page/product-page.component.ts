import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ProductPageViewModel from '../../view-models/product-page.viewmode';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import Product from '../../models/product.model';

@Component({
	selector: 'app-product-page',
	standalone: true,
	imports: [
		CommonModule,
		HeaderComponent,
		FooterComponent
	],
	templateUrl: './product-page.component.html',
	styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit {

	public product: Product = new Product(-1, '', 0, '', [], 'game', 0, 0, null, null, []);
	public coverImageIndex: number = 0;
	public priceInteger: string = '';
	public priceDecimal: string = '';
	public priceOld: string = '';

	public constructor(
		private _route: ActivatedRoute,
		private _nav: Router,
		private _viewModel: ProductPageViewModel
	) { }

	public async ngOnInit(): Promise<void> {
		await this.loadProduct();
		[this.priceInteger, this.priceDecimal] = this.setPrices(this.product.priceInCents);
		this.priceOld += this.setPrices(this.product.priceInCents, 1.4);
	}

	private async loadProduct(): Promise<void> {
		const id = Number(this._route.snapshot.paramMap.get('id') ?? '-1');

		if (id >= 0) {
			try {
				const product = await this._viewModel.getProductById(id)

				if (product != null) {
					this.product = product;
					return;
				}
			}
			catch (error) {
				this.gotoErrorPage(500);
			}
		}

		this.gotoErrorPage(404);
	}

	public setPrices(price: number, addition: number = 1): string[] {
		const priceInNumber = (price * addition / 100) ;
		const priceInString = priceInNumber.toFixed(2);

		return priceInString.split('.');
	}

	private gotoErrorPage(errorCode: number) {
		this._nav.navigate(['/error', errorCode]);
	}
}
