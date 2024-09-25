import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-banner',
	standalone: true,
	imports: [FormsModule],
	templateUrl: './banner.component.html',
	styleUrl: './banner.component.scss'
})
export class BannerComponent {}
