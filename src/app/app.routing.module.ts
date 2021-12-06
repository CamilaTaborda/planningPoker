import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/notFound/notFound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    { 
        path: '',
        component: LoginComponent
    },     
    { 
        path: 'dashboard', 
        component: DashboardComponent
    },
    { 
        path: '**', 
        component: NotFoundComponent 
    }  
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }

