import { Component,  Input,  EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  @Input() 'IChose': any;
  
  
  @Output() comeBackEvent = new EventEmitter<any>();
  @Output() addToYourFavorites = new EventEmitter<any>();

  comeBack(value: any) {
    this.comeBackEvent.emit(value);
  }
  favorites(value: any) {
    this.addToYourFavorites.emit(value);
  }

  

}
