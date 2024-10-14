import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-error-page',
	standalone: true,
	imports: [],
	templateUrl: './error-page.component.html',
	styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent implements OnInit {

	public code!: number

	public constructor(
		private _route: ActivatedRoute,
		private _nav: Router
	) {}

	public ngOnInit(): void {
		this.code = Number(this._route.snapshot.paramMap.get('code') ?? '404');
	}

	public getErrorMessage(code: number): string {
		const errorMessages: { [key: number]: string } = {
			404: 'Recurso não encontrado.',
			500: 'Erro interno do servidor.'
		};

		return errorMessages[code] ?? errorMessages[404];
	}

	public gotoHome(): void {
		this._nav.navigate(['/']);
	}
}
