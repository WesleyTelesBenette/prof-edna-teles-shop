import { Injectable } from "@angular/core";
import Product from "../models/product.model";

@Injectable({
	providedIn: 'root'
})
export default class SearchViewModel {

	public setSearchElements(datalist: Element): void {

		//Placeholder
		const searchTermsList: string[] = [
			'Adição',
			'Divisão',
			'Equação',
			'Equação de 1º Grau',
			'Equação de 2º Grau',
			'Multiplicação',
			'Porcentagem',
			'Tabuada',
			'Sistemas',
			'Subtração'
		];

		if (datalist) {
			searchTermsList.forEach(term => {
				const option = document.createElement('option');
				option.value = term;
				datalist.appendChild(option);
			});
		}
	}

	public searchProducts(search: string): Product[] {
		//...
		return [];
	}
}
