import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SignInComponent } from './home/signin/signin.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';

const routes: Routes = [
    { 
        path: '',
        component: SignInComponent 
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

