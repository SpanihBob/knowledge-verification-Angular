import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Favorites } from '../app.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  @Input() 'ev': Favorites;
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
