import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Music } from '../app.component';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent {
  @Input() 'ev': Music;
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
