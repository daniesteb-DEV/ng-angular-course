import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
  selector: 'hero-page',
  templateUrl: './hero-page.html',
  imports: [UpperCasePipe],
  styles: `
  `
})
export class HeroPageComponent {
  name = signal('iron man');
  age = signal(45);

  constructor() { }

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description.toUpperCase();
  })

  capitalizedName = computed(() => this.name().toUpperCase())

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }
}
