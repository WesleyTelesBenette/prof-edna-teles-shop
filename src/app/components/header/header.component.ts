import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CartPanelComponent } from '../cart-panel/cart-panel.component';
import { UserPanelComponent } from '../user-panel/user-panel.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [NgbDropdownModule, CommonModule, CartPanelComponent, UserPanelComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {
	protected idUser: string = 'idUser';
	protected idCart: string = 'idCart';

	public constructor(private _nav: Router) {}

	protected linksList: {label: string, link: string[]}[] =
	[
		{label: 'Ensino Médio', link: ['/search', 'Ensino+Médio']},
		{label: 'Ensino Fundamenta', link: ['/search', 'Ensino+Fundamental']},
		{label: 'Primário', link: ['/search', 'Primário']},
		{label: 'Todos os Jogos', link: ['/search', 'Jogo']},
		{label: 'Sobre', link: ['/sobre']}
	];

	public gotoMenu() {
		this._nav.navigate(['/']);
	}

	public gotoLink(link: string[]) {
		this._nav.navigate(link);
	}
}
