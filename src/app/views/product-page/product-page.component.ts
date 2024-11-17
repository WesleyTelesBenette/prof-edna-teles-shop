import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ProductPageViewModel from '../../view-models/product-page.viewmode';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CommonModule } from '@angular/common';
import Product from '../../models/product.model';
import { LoadingComponent } from "../../components/loading/loading.component";
import { Subject } from 'rxjs/internal/Subject';

@Component({
	selector: 'app-product-page',
	standalone: true,
	imports: [
		CommonModule,
		HeaderComponent,
		FooterComponent,
		LoadingComponent
	],
	templateUrl: './product-page.component.html',
	styleUrls: [
		'./product-page.component.scss',
		'./product-page-media.component.scss'
	]
})
export class ProductPageComponent implements AfterViewInit {

	public loadData: boolean = false;
	private destroy$ = new Subject<void>();

	public product!: Product;
	public coverImageIndex: number = 0;
	public priceInteger: string = '';
	public priceDecimal: string = '';
	public priceOld: string = '';

	public constructor(
		private _route: ActivatedRoute,
		private _nav: Router,
		private _viewModel: ProductPageViewModel
	) { }

	public async ngAfterViewInit(): Promise<void> {
		await this.loadProduct();
		[this.priceInteger, this.priceDecimal] = this.setPrices(this.product!.priceInCents);
		this.priceOld += this.setPrices(this.product!.priceInCents, 1.4);
		this.loadData = true;
	}

	private async loadProduct(): Promise<void> {
		const id = Number(this._route.snapshot.paramMap.get('id') ?? '-1');

		if (id >= 0) {
			try {
				const product = await this._viewModel.getProductById(id)

				if (product?.content?.length) {
					this.product = product.content[0];
					return;
				}
			}
			catch (error) {
				this.gotoErrorPage(500);
			}
		}

		this.gotoErrorPage(404);
	}

	public formatImage(image: string): string {
		return `./assets/images/products/${image}.jpg`;
	}

	public setPrices(price: number, addition: number = 1): string[] {
		const priceInNumber = (price * addition / 100) ;
		const priceInString = priceInNumber.toFixed(2);

		return priceInString.split('.');
	}

	public setCoverImageIndex(index: number): void {
		this.coverImageIndex = index;
	}

	private gotoErrorPage(errorCode: number) {
		this._nav.navigate(['/error', errorCode]);
	}

	public ngOnDestroy(): void {
		// Garantir que o Subject seja completado ao destruir o componente
		this.destroy$.next();
		this.destroy$.complete();
	  }
}
