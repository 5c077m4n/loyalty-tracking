import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/content/home/home.component';
import { AboutUsComponent } from './components/content/about-us/about-us.component';
import { DeliverablesComponent } from './components/content/deliverables/deliverables.component';
import { CustomersComponent } from './components/content/customers/customers.component';
import { TestimonialsComponent } from './components/content/testimonials/testimonials.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactUsComponent } from './components/content/contact-us/contact-us.component';


const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full'},
	{ path: 'home', component: HomeComponent, pathMatch: 'full'},
	{ path: 'about-us', component: AboutUsComponent, pathMatch: 'full'},
	{ path: 'deliverables', component: DeliverablesComponent, pathMatch: 'full'},
	{ path: 'customers', component: CustomersComponent, pathMatch: 'full'},
	{ path: 'testimonials', component: TestimonialsComponent, pathMatch: 'full'},
	{ path: 'contact-us', component: ContactUsComponent, pathMatch: 'full'},
	{ path: '**', component: NotFoundComponent, pathMatch: 'full'},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
