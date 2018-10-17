import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
	selector: 'app-deliverables',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './deliverables.component.html',
	styleUrls: ['./deliverables.component.css']
})
export class DeliverablesComponent implements OnInit {
	constructor() {}
	ngOnInit() {}
}
