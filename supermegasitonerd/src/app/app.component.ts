import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'supermegasitonerd';
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from './card.model';
import { CardDetailComponent } from './card-detail/card-detail.component';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'https://api.scryfall.com/cards/named';

  constructor(private http: HttpClient) {}

  getCardByName(cardName: string): Observable<Card> {
    return this.http.get<Card>(`${this.apiUrl}?exact=${cardName}`);
  }
}

