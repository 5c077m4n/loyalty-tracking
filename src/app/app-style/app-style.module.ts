import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';


const modules = [
	MatMenuModule,
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	MatToolbarModule,
	MatSidenavModule,
	MatIconModule,
	MatListModule,
	MatCardModule,
	MatTabsModule,
	MatDividerModule,
];

@NgModule({
	imports: [
		...modules
	],
	exports: [
		...modules
	]
})
export class AppStyleModule {}
