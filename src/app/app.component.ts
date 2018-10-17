import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription, Observable } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';


@Component({
	selector: 'app-root',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
	private listener: Subscription;
	constructor(
		private titleService: Title,
		private router: Router,
	) {
		this.listener = this.titleChanger$
			.subscribe();
	}

	public get titleChanger$(): Observable<any> {
		return this.router.events
			.pipe(
				filter((e: Event) => e.constructor === NavigationStart),
				map((e: NavigationStart) => e.url),
				map((url: string) => url.substring(1)),
				map((url: string) => url.replace('-', ' ')),
				map(this.capitalize),
				tap(pageName => this.titleService.setTitle(`LoyaltyTracking | ${pageName}`)),
			);
	}

	private capitalize(str: string): string {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	ngOnDestroy(): void {
		this.listener.unsubscribe();
	}
}
