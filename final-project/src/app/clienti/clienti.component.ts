import { Router } from '@angular/router';
import { ClientiService } from './../services/clienti.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css'],
})
export class ClientiComponent implements OnInit {
  clienti: any;

  constructor(private clientiservice: ClientiService, private router: Router) {}

  ngOnInit(): void {
    this.clientiservice
      .getAllClienti()
      .subscribe((clienti) => (this.clienti = clienti));
    this.clientiservice
      .getAllClienti()
      .subscribe((response) => console.log(response));
  }

  /* rimuoviCliente(item:any) {
    this.clientiservice.deleteCliente(item.id).subscribe(resp => console.log(resp));
    this.clienti = this.clienti.filter(cliente:{id:any => cliente.id !== item.id)}
  } */

  rimuoviCliente(item: any) {
    this.clientiservice
      .deleteCliente(item.id)
      .subscribe((resp) => console.log(resp));
    this.clienti = this.clienti.filter(
      (customer: { id: any }) => customer.id !== item.id
    );
  }
  updateClienti(item: any) {
    this.router.navigate(['clienti', item.id, 'modifica']);
  }
}
