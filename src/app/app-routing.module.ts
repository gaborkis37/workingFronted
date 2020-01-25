import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'getProducts', component: ListproductsComponent },
  { path: 'addProduct', component: AddproductComponent },
  { path: 'registration', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
