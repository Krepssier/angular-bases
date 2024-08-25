import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  title = "Me gusta Angular!!";
  age = 28;
  isStrong = true;

  hero = {name: 'Spiderman', city: ' NY'};

  getAge(){
    return this.age;
  }
}


