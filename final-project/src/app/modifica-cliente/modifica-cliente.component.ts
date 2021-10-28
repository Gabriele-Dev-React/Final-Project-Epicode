import { ActivatedRoute, Router } from '@angular/router';
import { ClientiService } from './../services/clienti.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifica-cliente',
  templateUrl: './modifica-cliente.component.html',
  styleUrls: ['./modifica-cliente.component.css'],
})
export class ModificaClienteComponent implements OnInit {
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
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientiservice: ClientiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.clientiservice
        .getClienteId(params.id)
        .subscribe((cliente) => (this.cliente = cliente))
    );
  }

  saveCliente() {
    this.clientiservice
      .updateClienti(this.cliente)
      .subscribe((resp) => console.log(resp));
    this.router.navigate(['clienti']);
    console.log(this.cliente.id);
  }
}
