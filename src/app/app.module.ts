import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppStyleModule } from './app-style/app-style.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomeComponent } from './components/content/home/home.component';
import { AboutUsComponent } from './components/content/about-us/about-us.component';
import { DeliverablesComponent } from './components/content/deliverables/deliverables.component';
import { CustomersComponent } from './components/content/customers/customers.component';
import { TestimonialsComponent } from './components/content/testimonials/testimonials.component';
import { ContactUsComponent } from './components/content/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent,
		SideBarComponent,
		HomeComponent,
		AboutUsComponent,
		DeliverablesComponent,
		CustomersComponent,
		TestimonialsComponent,
		ContactUsComponent,
		NotFoundComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		AppStyleModule
	],
	providers: [
		Title
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
