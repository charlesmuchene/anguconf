import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { SignUpComponent } from './home/sign-up/sign-up.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'sign-up', component: SignUpComponent },
	// { path: 'buy-tickets', loadChildren: './tickets/tickets.???' },
	{ path: 'sessions', loadChildren: './sessions/sessions.module#SessionsModule' }
];

@NgModule({
	imports: [ HomeModule, RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
