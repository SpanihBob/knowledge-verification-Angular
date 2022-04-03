import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Films } from '../app.component';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  @Input() 'ev': Films;
  @Input() 'index': number;
  
  onOff = false;
  info() {
    this.onOff = true;
  }

  @Output() newItemEvent = new EventEmitter<any>();

  addNewItem(value: any) {
    this.newItemEvent.emit(value);
  }
}
