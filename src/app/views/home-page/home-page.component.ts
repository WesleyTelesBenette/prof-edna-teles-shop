import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from "../../components/banner/banner.component";
import { SearchComponent } from "../../components/search/search.component";
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { ProductSectionComponent } from "../../components/product-section/product-section.component";
import { CategoryComponent } from '../../components/category/category.component';
import ProductMini from '../../models/product-mini.model';
import { HomePageViewModel } from '../../view-models/home-page.viewmodel';
import Category from '../../models/category.model';
import { FooterComponent } from "../../components/footer/footer.component";
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from "../../components/loading/loading.component";

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [
		HttpClientModule,
		CommonModule,
		HeaderComponent,
		BannerComponent,
		SearchComponent,
		ProductSectionComponent,
		ProductComponent,
		CategoryComponent,
		FooterComponent,
		LoadingComponent
	],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
	public loadData: boolean = false;

	public recentProducts: ProductMini[] = [];
	public productCategories: Category[] = [];
	public bestSellers: ProductMini[] = [];
	public gameCategories: string[] = [];
	public recommendations: ProductMini[] = [];

	public constructor(
		private _viewModel: HomePageViewModel,
		private _nav: Router,
		private _cdr: ChangeDetectorRef
	) {}

	public async ngOnInit(): Promise<void> {
		try {
			const page = await this._viewModel.getPageContent();

			if (page.statusCode == 200) {
				const pageObject = page.content[0];

				this.recentProducts = pageObject.productsMini[0];
				this.productCategories = pageObject.categories[0];
				this.bestSellers = pageObject.productsMini[1];
				this.gameCategories = pageObject.strings[0];
				this.recommendations = pageObject.productsMini[2];

				this.loadData = true;
				this._cdr.detectChanges();
			} else {
				console.warn('Erro na requisição...');
				this._nav.navigate(['/error', 404]);
			}
		}
		catch(error) {
			console.error(error);
			this._nav.navigate(['/error', 500]);
		}
	}
}
