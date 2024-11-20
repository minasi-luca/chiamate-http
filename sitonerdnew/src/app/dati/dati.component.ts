import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-dati',
  templateUrl: './dati.component.html',
  styleUrls: ['./dati.component.css']
})
export class DatiComponent implements OnInit {
    datiCarta: any;
    caricamento = false;

    
    constructor(private route: ActivatedRoute, private http:HttpClientModule) {
      
    }

    ngOnInit(): void {
      this.route.paramMap.subscribe(params=>{
        const datiCarta = params.get('name')!;
        this.CercaCarta(datiCarta);

      });
      
    }
  
  
  CercaCarta(datiCarta: string): void{
    this.caricamento= true;
    const url = 'https://api.scryfall.com/cards/named?fuzzy=${datiCarta}';
    this.http.get(url).subscribe(
      (data)=>{
        this.datiCarta = data;
        this.caricamento= false;

      },

      (error)=>{
        console.error('suca')
        this.caricamento=false;
      }
    
    );
  }
    
   

}
