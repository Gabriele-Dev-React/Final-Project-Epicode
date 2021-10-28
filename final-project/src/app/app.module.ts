import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ClientiComponent } from './clienti/clienti.component';
import { FattureComponent } from './fatture/fatture.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MyHttpInterceptor } from './inteceptor/my-http-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NuovoclienteComponent } from './nuovocliente/nuovocliente.component';
import { FormsModule } from '@angular/forms';
import { ModificaClienteComponent } from './modifica-cliente/modifica-cliente.component';
import { NuovaFatturaComponent } from './nuova-fattura/nuova-fattura.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ModificaFatturaComponent } from './modifica-fattura/modifica-fattura.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ClientiComponent,
    FattureComponent,
    NavbarComponent,
    FooterComponent,
    NuovoclienteComponent,
    ModificaClienteComponent,
    NuovaFatturaComponent,
    RegistrazioneComponent,
    ModificaFatturaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
