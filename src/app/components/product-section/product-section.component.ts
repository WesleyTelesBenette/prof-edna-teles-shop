import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { LazyLoadDirective } from '../../shared/directives/lazy-load.directive';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CommonModule, ProductComponent, LazyLoadDirective],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.scss'
})
export class ProductSectionComponent {

	@Input() color: 'white' | 'colorful' = 'white';
	@Input() title: string = '';

	public loadComponent: boolean = false;
}
