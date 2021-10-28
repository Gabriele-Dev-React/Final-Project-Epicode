import { Router } from '@angular/router';
import { ClientiService } from './../services/clienti.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css'],
})
export class FattureComponent implements OnInit {
  fatture: any;

  constructor(private clietiservice: ClientiService, private router: Router) {}

  ngOnInit(): void {
    this.clietiservice.getFatture().subscribe((resp) => (this.fatture = resp));
  }

  deleteFatture(item: any) {
    alert('Fattura Eliminata');
    this.clietiservice
      .deleteFatture(item.id)
      .subscribe((resp) => console.log(resp));
    this.fatture = this.fatture.filter(
      (fattura: { id: any }) => fattura.id !== item.id
    );
  }
}
