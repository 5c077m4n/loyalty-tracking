import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';


@Component({
	selector: 'app-nav-bar',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
	constructor(private cdr: ChangeDetectorRef) {}
	ngOnInit() {}
}
