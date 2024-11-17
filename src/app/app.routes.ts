import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { ProductPageComponent } from './views/product-page/product-page.component';
import { SearchPageComponent } from './views/search-page/search-page.component';

export const routes: Routes = [
	{ path: '', component: HomePageComponent},
	{ path: 'product/:id',  component: ProductPageComponent},
	{ path: 'search/:term', component: SearchPageComponent},
	{ path: 'error/:code',  component: ErrorPageComponent },
	{ path: '**',           component: ErrorPageComponent }
];

@NgModule
({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}
