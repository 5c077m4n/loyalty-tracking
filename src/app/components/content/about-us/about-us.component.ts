import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
	selector: 'app-about-us',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './about-us.component.html',
	styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
	constructor() {}
	ngOnInit() {}
}
