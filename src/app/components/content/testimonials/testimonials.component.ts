import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
	selector: 'app-testimonials',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './testimonials.component.html',
	styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
	constructor() {}
	ngOnInit() {}
}
