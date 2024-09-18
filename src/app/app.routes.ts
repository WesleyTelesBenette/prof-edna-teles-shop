import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';

export const routes: Routes = [
	{ path: "", component: HomePageComponent},
	{ path: '**', component: ErrorPageComponent }
];

@NgModule
({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}
