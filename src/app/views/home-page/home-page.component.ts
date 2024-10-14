import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from "../../components/banner/banner.component";
import { SearchComponent } from "../../components/search/search.component";
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { ProductSectionComponent } from "../../components/product-section/product-section.component";
import { CategoryComponent } from '../../components/category/category.component';
import Product from '../../models/product.model';
import { HomePageViewModel } from '../../view-models/home-page.viewmodel';
import Category from '../../models/category.model';
import { FooterComponent } from "../../components/footer/footer.component";
import { Router } from '@angular/router';

@Component({
	selector: 'app-home-page',
	standalone: true,
	imports: [
    CommonModule,
    HeaderComponent,
    BannerComponent,
    SearchComponent,
    ProductSectionComponent,
    ProductComponent,
    CategoryComponent,
    FooterComponent
],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
	public recentPacks!: Product[];
	public packCategories!: Category[];
	public bestSellers!: Product[];
	public gameCategories!: Category[];
	public recommendations!: Product[];

	public constructor(
		private _viewModel: HomePageViewModel,
		private _nav: Router
	) {}

	public async ngOnInit(): Promise<void> {
		try {
			this.recentPacks     = await this._viewModel.getRecentPacks();
			this.packCategories  = await this._viewModel.getPackCategories();
			this.bestSellers     = await this._viewModel.getBestSellers();
			this.gameCategories  = await this._viewModel.getGameCategories();
			this.recommendations = await this._viewModel.getRecommendations();
		}
		catch(error) {
			console.error(error);
			this._nav.navigate(['/error', 500]);
		}
	}
}
