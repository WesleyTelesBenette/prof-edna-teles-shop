import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-category',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './category.component.html',
	styleUrl: './category.component.scss'
})
export class CategoryComponent {
	@Input() name: string = 'categoria';
	@Input() link: string = '#';
	@Input() imageUrl!: string;
}
