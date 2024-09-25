import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements AfterViewInit {
	@ViewChild('searchTerms', { static: false }) searchTerms!: ElementRef;

	public searchTermsList: string[] = [
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

	constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

	public ngAfterViewInit() {
		if (isPlatformBrowser(this.platformId))
			this.populateDatalist();
	}

	public populateDatalist(): void {
		const datalist = this.searchTerms.nativeElement;

		if (datalist) {
			this.searchTermsList.forEach(term => {
				const option = document.createElement('option');
				option.value = term;
				datalist.appendChild(option);
			});
		}
	}
}
