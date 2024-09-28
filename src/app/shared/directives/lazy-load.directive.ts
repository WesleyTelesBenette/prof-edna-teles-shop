import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, EventEmitter, Output, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';

@Directive({
	selector: '[appLazyLoad]',
	standalone: true
})
export class LazyLoadDirective implements OnInit, OnDestroy {
	@Output() isVisible = new EventEmitter<boolean>();
	private observer!: IntersectionObserver;

	constructor(
		private el: ElementRef,
		@Inject(PLATFORM_ID) private platformId: object
	) {}

	ngOnInit() {
		if ((isPlatformBrowser(this.platformId)) && ('IntersectionObserver' in window)) {
			this.observer = new IntersectionObserver((entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						this.isVisible.emit(true);
						this.observer.unobserve(this.el.nativeElement);
					}
				});
			}, {
				root: null,
				threshold: .8
			});

			this.observer.observe(this.el.nativeElement);
		} else {
			this.isVisible.emit();
		}
	}

	ngOnDestroy() {
		if (this.observer) {
			this.observer.disconnect();
		}
	}
}
