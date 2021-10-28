import { ClientiService } from './../services/clienti.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css'],
})
export class RegistrazioneComponent implements OnInit {
  constructor(private clientiservice: ClientiService, private router: Router) {}

  utente: any = {
    username: '',
    email: '',
    password: '',
    role: ['user'],
  };

  ngOnInit(): void {}

  Registrati(){
    console.log(this.utente)
    this.clientiservice.postRegistrazione(this.utente).subscribe((response)=> {console.log(response)
   this.router.navigate(['home']) 
});
}
}
