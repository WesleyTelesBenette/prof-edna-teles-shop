import { Component, Input } from '@angular/core';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-cart-panel',
  standalone: true,
  imports: [PanelComponent],
  templateUrl: './cart-panel.component.html',
  styleUrl: './cart-panel.component.scss'
})
export class CartPanelComponent {
	@Input() idCart!: string;
}
