import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TokenService } from './token.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProdcuctService } from './prodcuct.service';
import { RegisterComponent } from './register/register.component';
import { RegistrationService } from './registration.service';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '**', component: HomeComponent},
  {path: 'registration', component: RegisterComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ListproductsComponent,
    AddproductComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TokenService, ProdcuctService, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
