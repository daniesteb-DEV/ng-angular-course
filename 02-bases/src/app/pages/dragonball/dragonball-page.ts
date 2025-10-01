import { Component, computed, signal } from '@angular/core';
import { Navbar } from '../../components/shared/navbar/navbar';
import { NgClass } from '@angular/common';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [Navbar, NgClass],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  name = signal('Bulma');
  power = signal(100);
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Piccolo', power: 3000 },
    { id: 4, name: 'Gohan', power: 8000 },
    { id: 4, name: 'Yamcha', power: 500 },
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': this.characters().some(character => character.power > 9000),
      'text-primary': this.characters().some(character => character.power < 9000),
    }
  });

  addCharacter() {
    console.log({ name: this.name(), power: this.power() });
    const newCharacter:Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    // this.characters().push(newCharacter);
    this.characters.update(characters => [...characters, newCharacter]);
  }
}
