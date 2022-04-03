import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Theatre } from '../app.component';

@Component({
  selector: 'app-teatr',
  templateUrl: './teatr.component.html',
  styleUrls: ['./teatr.component.css']
})
export class TeatrComponent {
  @Input() 'ev': Theatre;
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
