import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';


@Component({
	selector: 'app-not-found',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './not-found.component.html',
	styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
	constructor(private cdr: ChangeDetectorRef) {}
	ngOnInit() {}
}
