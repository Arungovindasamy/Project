import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ContactusComponent } from './components/contactus/contactus.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RainbowDirective } from './rainbow.directive';
import { samplepipe } from './samplepipe.pipe';
import { SentencecasePipe } from './sentencecase.pipe';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    ProductsComponent,
    LoginComponent,
    RainbowDirective,
    SentencecasePipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,FormsModule,ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
