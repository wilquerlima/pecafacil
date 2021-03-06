import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-router';

import { AppComponent } from './app.component';
import { PratoComponent } from './prato/prato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './services/login.service';
import { ApiService } from './services/api.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PratoComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LoginService, ApiService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
