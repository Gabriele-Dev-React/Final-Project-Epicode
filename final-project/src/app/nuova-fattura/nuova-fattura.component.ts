import { Router } from '@angular/router';
import { ClientiService } from './../services/clienti.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuova-fattura',
  templateUrl: './nuova-fattura.component.html',
  styleUrls: ['./nuova-fattura.component.css'],
})
export class NuovaFatturaComponent implements OnInit {
  fattura: any = {
    data: '2019-07-31T16:09:43.763+00:00',
    numero: '0',
    anno: '',
    importo: '',
    stato: {
      id: 1,
      nome: 'PAGATA',
    },
    cliente: {
      id: 1,
      ragioneSociale: null,
      partitaIva: null,
      tipoCliente: null,
      email: null,
      pec: null,
      telefono: null,
      nomeContatto: null,
      cognomeContatto: null,
      telefonoContatto: null,
      emailContatto: null,
      indirizzoSedeOperativa: null,
      indirizzoSedeLegale: null,
      dataInserimento: null,
      dataUltimoContatto: null,
      fatturatoAnnuale: null,
    },
  };

  constructor(private router: Router, private clientiservice: ClientiService) {}

  ngOnInit(): void {}

  saveFattura() {
    this.clientiservice
      .addFatture(this.fattura)
      .subscribe((resp) => console.log(resp));
    this.router.navigate(['fatture']);
    alert('Fattura Aggiunta!');
  }
}
