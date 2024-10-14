import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import SearchViewModel from '../../view-models/search.viewmodel';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements AfterViewInit {
	@ViewChild('searchTerms', { static: false }) searchTerms!: ElementRef;
	@ViewChild('searchInput') searchInput!: ElementRef;

	constructor(
		@Inject(PLATFORM_ID) private platformId: Object,
		private _viewModel: SearchViewModel
	) {}

	public ngAfterViewInit(): void {
		if (isPlatformBrowser(this.platformId))
			this.populateDatalist();
	}

	public populateDatalist(): void {
		const datalist = this.searchTerms.nativeElement;

		if (datalist) {
			this._viewModel.setSearchElements(datalist);
		}
	}

	public search(): void {
		const searchInput = this.searchInput.nativeElement;

		if (searchInput) {
			this._viewModel.searchProducts(searchInput.value);
		}
	}
}
