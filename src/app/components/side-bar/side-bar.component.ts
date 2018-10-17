import {
	Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
	selector: 'app-side-bar',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './side-bar.component.html',
	styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {
	public mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;
	constructor(
		private cdr: ChangeDetectorRef,
		private media: MediaMatcher,
	) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => this.cdr.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}
	ngOnInit() {}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}
}
