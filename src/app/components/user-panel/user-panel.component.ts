import { Component, Input } from '@angular/core';
import { PanelComponent } from "../panel/panel.component";

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [PanelComponent],
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.scss'
})
export class UserPanelComponent {
	@Input() idUser!: string;
}
