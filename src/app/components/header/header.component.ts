import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CartPanelComponent } from '../cart-panel/cart-panel.component';
import { UserPanelComponent } from '../user-panel/user-panel.component';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [NgbDropdownModule, CommonModule, CartPanelComponent, UserPanelComponent],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss'
})
export class HeaderComponent {
	protected idUser: string = "idUser";
	protected idCart: string = "idCart";

	protected linksList: {label: string, link: string}[] =
	[
		{label: "Ensino Médio", link: "#"},
		{label: "Ensino Fundamenta", link: "#"},
		{label: "Primário", link: "#"},
		{label: "Todos os Jogos", link: "#"},
		{label: "Sobre", link: "#"}
	];

}
