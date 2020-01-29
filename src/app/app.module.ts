import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { ListproductsComponent } from './products/listproducts.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationService } from './services/registration.service';
import { TokenService } from './services/token.service';
import { ProdcuctService } from './services/prodcuct.service';
import { EditproductComponent } from './editproduct/editproduct.component';

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
    RegisterComponent,
    LogoutComponent,
    EditproductComponent,
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
