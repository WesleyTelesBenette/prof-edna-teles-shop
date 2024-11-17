import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import Category from '../../models/category.model';

@Component({
	selector: 'app-category',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './category.component.html',
	styleUrl: './category.component.scss'
})
export class CategoryComponent {
	@Input() category: Category | null = null;
	@Input() name: string = '';
}
