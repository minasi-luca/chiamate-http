import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sitonerdnew';

  // Elenco delle carte
  cards = [
    { name: 'Disorient', link: '/carta/Disorient' },
    { name: 'Spectacular Showdown', link: '/carta/Spectacular Showdown' },
    { name: 'Mesmeric Fiend', link: '/carta/Mesmeric Fiend' },
    { name: 'Talisman of Resilience', link: '/carta/Talisman of Resilience' },
    { name: 'Command Tower', link: '/carta/Command Tower' },
  ];

  // Query di ricerca
  searchQuery = '';

  // Metodo per filtrare le carte
  get filteredCards() {
    return this.cards.filter((card) =>
      card.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
