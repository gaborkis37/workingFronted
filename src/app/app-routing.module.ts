import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListproductsComponent } from './products/listproducts.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'getProducts', component: ListproductsComponent },
  { path: 'addProduct', component: AddproductComponent },
  { path: 'registration', component: RegisterComponent},
  {path: 'logout', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
