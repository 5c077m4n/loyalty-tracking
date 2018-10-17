import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
	selector: 'app-customers',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './customers.component.html',
	styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
	constructor() {}
	ngOnInit() {}
}
