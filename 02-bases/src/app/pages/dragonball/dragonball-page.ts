import { Component, signal } from '@angular/core';
import { Navbar } from '../../components/shared/navbar/navbar';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [Navbar],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Piccolo', power: 3000 },
    { id: 4, name: 'Gohan', power: 8000 },
  ]);
}
