import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-form-hero',
  templateUrl: './form-hero.component.html',
  styleUrls: ['./form-hero.component.css']
})
export class FormHeroComponent {

  powers = ['Really Smart', 'Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, "Dr. IQ", this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit(){this.submitted = true};
}
