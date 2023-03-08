import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  number1: number = 1;
  number2: number = 2;
  togglePokemon: boolean = true;

  constructor() {
    this.title = "Hasira";
  }
}
