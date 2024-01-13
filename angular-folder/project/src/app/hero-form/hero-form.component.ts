import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  powers = ["Smart", "Flexible", "Hot", "Mind Manipulation"];

  model = new Hero(1, 'Om P', this.powers[0], 'op');
  
  submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  newHero(){
    this.model = new Hero(42, '', '');
  }
}
