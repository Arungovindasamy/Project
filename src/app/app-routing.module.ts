import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { LoginComponent } from './components/login/login.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"", redirectTo:"login",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent},
  {path:"about-us",component:AboutusComponent},
  {path:"contact-us",component:ContactusComponent},
  {path:"login",component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
