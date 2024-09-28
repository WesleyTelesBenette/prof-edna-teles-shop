import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { LazyLoadDirective } from '../../shared/directives/lazy-load.directive';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [CommonModule, ProductComponent, LazyLoadDirective],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.scss'
})
export class ProductSectionComponent implements OnInit {

	public loadComponent: boolean = false;
	public products: {name: string; price: bigint; imageUrl: string;}[] = [];

	public ngOnInit(): void {
		//Enquanto não tem banco de dados
		this.products.push({name: 'Dominó da Porcentagem', price: BigInt(4999), imageUrl: 'https://i.imgur.com/0kV15x1.jpg'});
		this.products.push({name: 'Dominó da Porcentagem', price: BigInt(4999), imageUrl: 'https://i.imgur.com/0kV15x1.jpg'});
		this.products.push({name: 'Dominó da Porcentagem', price: BigInt(4999), imageUrl: 'https://i.imgur.com/0kV15x1.jpg'});
		this.products.push({name: 'Dominó da Porcentagem', price: BigInt(4999), imageUrl: 'https://i.imgur.com/0kV15x1.jpg'});
		this.products.push({name: 'Dominó da Porcentagem', price: BigInt(4999), imageUrl: 'https://i.imgur.com/0kV15x1.jpg'});
		this.products.push({name: 'Dominó da Porcentagem', price: BigInt(4999), imageUrl: 'https://i.imgur.com/0kV15x1.jpg'});
		this.products.push({name: 'Dominó da Porcentagem', price: BigInt(4999), imageUrl: 'https://i.imgur.com/0kV15x1.jpg'});
		this.products.push({name: 'Dominó da Porcentagem', price: BigInt(4999), imageUrl: 'https://i.imgur.com/0kV15x1.jpg'});
		this.products.push({name: 'Dominó da Porcentagem', price: BigInt(4999), imageUrl: 'https://i.imgur.com/0kV15x1.jpg'});
		this.products.push({name: 'Dominó da Porcentagem', price: BigInt(4999), imageUrl: 'https://i.imgur.com/0kV15x1.jpg'});
		this.products.push({name: 'Dominó da Porcentagem', price: BigInt(4999), imageUrl: 'https://i.imgur.com/0kV15x1.jpg'});
		this.products.push({name: 'Dominó da Porcentagem', price: BigInt(4999), imageUrl: 'https://i.imgur.com/0kV15x1.jpg'});
	}

}
