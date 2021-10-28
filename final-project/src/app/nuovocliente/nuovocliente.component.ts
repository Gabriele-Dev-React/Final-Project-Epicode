import { ClientiService } from './../services/clienti.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuovocliente',
  templateUrl: './nuovocliente.component.html',
  styleUrls: ['./nuovocliente.component.css'],
})
export class NuovoclienteComponent implements OnInit {
  comune: any = {
    nome: '',
  };
  cliente: any = {
    ragioneSociale: '',
    partitaIva: '',
    tipoCliente: 'SRL',
    email: '',
    pec: '',
    telefono: '',
    nomeContatto: '',
    cognomeContatto: '',
    telefonoContatto: '',
    emailContatto: '',
    indirizzoSedeOperativa: {
      via: '',
      civico: '',
      cap: '',
      localita: '',
      comune: {
        id: 1,
        nome: 'LASTRA A SIGNA',
        provincia: {
          id: 1,
          nome: 'FIRENZE',
          sigla: 'FI',
        },
      },
    },
    indirizzoSedeLegale: {
      via: '',
      civico: '',
      cap: '',
      localita: '',
      comune: {
        id: 1,
        nome: 'LASTRA A SIGNA',
        provincia: {
          id: 1,
          nome: 'FIRENZE',
          sigla: 'FI',
        },
      },
    },
    dataInserimento: '',
    dataUltimoContatto: '',
  };

  constructor(private router: Router, private clientiservice: ClientiService) {}

  ngOnInit(): void {
    this.clientiservice.getComuni().subscribe((data) => (this.comune = data));
  }

  saveCliente() {
    this.clientiservice
      .addCliente(this.cliente)
      .subscribe((resp) => console.log(resp));
    alert('Registrazione Effettuata');
  }
}
