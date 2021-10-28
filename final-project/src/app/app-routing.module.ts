import { SecurityService } from './services/security.service';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { NuovaFatturaComponent } from './nuova-fattura/nuova-fattura.component';
import { ModificaClienteComponent } from './modifica-cliente/modifica-cliente.component';
import { NuovoclienteComponent } from './nuovocliente/nuovocliente.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FattureComponent } from './fatture/fatture.component';
import { ClientiComponent } from './clienti/clienti.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'registrazione', pathMatch: 'full' },
  /* { path: 'utenti', component:  }, */
  { path: 'clienti', component: ClientiComponent,  canActivate: [SecurityService] },
  { path: 'fatture', component: FattureComponent ,  canActivate: [SecurityService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent ,  canActivate: [SecurityService] },
  { path: 'nuovocliente', component: NuovoclienteComponent ,  canActivate: [SecurityService] },
  { path: 'clienti/:id/modifica', component: ModificaClienteComponent ,  canActivate: [SecurityService] },
  { path: 'nuovafattura', component: NuovaFatturaComponent ,  canActivate: [SecurityService] },
  { path: 'registrazione', component: RegistrazioneComponent ,   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
