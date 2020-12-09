import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazarteAboutComponent } from './lazarte-about/lazarte-about.component';
import { LazarteProductsComponent } from './lazarte-products/lazarte-products.component';

const routes: Routes = [
    {   
        path: '',
        redirectTo: 'products',
        pathMatch: 'full', 
    },
    { 
        path: 'products', 
        component: LazarteProductsComponent },
    { 
        path: 'about', 
        component: LazarteAboutComponent },
   ];

   
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }