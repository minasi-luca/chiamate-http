import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dati',
  templateUrl: './dati.component.html',
  styleUrls: ['./dati.component.css']
})
export class DatiComponent implements OnInit {
  datiCarta: any;
  caricamento = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const nomeCarta = params.get('name')!;
      this.CercaCarta(nomeCarta);
    });
  }

  CercaCarta(nomeCarta: string): void {
    this.caricamento = true;
    const url = `https://api.scryfall.com/cards/named?fuzzy=${nomeCarta}`;
    this.http.get(url).subscribe(
      (data) => {
        this.datiCarta = data;
        this.caricamento = false;
      },
      (error) => {
        console.error('Errore nel caricamento dei dati:', error);
        this.caricamento = false;
      }
    );
  }
}
