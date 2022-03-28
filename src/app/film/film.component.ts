import { Component, Input, OnInit } from '@angular/core';
import { Films } from '../app.component';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  @Input() 'ev': Films;
  @Input() 'index': number;
  
  onOff = false;
  info() {
    this.onOff = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
