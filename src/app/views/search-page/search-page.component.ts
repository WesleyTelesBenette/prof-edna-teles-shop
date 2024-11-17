import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingComponent } from '../../components/loading/loading.component';
import { HeaderComponent } from "../../components/header/header.component";
import SearchPageViewModel from '../../view-models/search-page.viewmodel';
import ProductMini from '../../models/product-mini.model';

@Component({
	selector: 'app-search-page',
	standalone: true,
	imports: [
    CommonModule,
    LoadingComponent,
    HeaderComponent
],
	templateUrl: './search-page.component.html',
	styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {

	public loadData: boolean = false;
	public products: ProductMini[] = [];
	public termShow: string = '';

	public maxIndexPage: number = 0;
	public currentIndexPage: number = 1;
	public readonly maxProductsForPage: number = 10;

	public constructor(
		private _route: ActivatedRoute,
		private _nav: Router,
		private _cdr: ChangeDetectorRef,
		private _viewmodel: SearchPageViewModel
	) {}

	public async ngOnInit(): Promise<void> {
		const term = this._route.snapshot.paramMap.get('term') ?? '';
		this.termShow = term.replace('+', ' ');

		await this.getData();
	}

	private async getData() {
		try {
			const termTreated = this.termShow.trim().replace(' ', '+');
			let response = await this._viewmodel
				.getSearch(termTreated, this.maxProductsForPage, this.currentIndexPage);

			if ((response.statusCode >= 200) && (response.statusCode < 300))
			{
				let page = response.content;

				if (page.length > 0) {
					this.maxIndexPage = page[0].length / this.maxProductsForPage;
					this.products = page[0].products;
				}

				this.loadData = true;
				this._cdr.detectChanges();
				return;
			}

			throw Error();
		}
		catch {
			console.warn('Erro na requisição de busca de: ' + this.termShow + '.');
			this._nav.navigate(['/error', 404]);
		}
	}
}
