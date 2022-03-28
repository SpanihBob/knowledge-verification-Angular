import { Component, Input, OnInit } from '@angular/core';
import { Theatre } from '../app.component';

@Component({
  selector: 'app-teatr',
  templateUrl: './teatr.component.html',
  styleUrls: ['./teatr.component.css']
})
export class TeatrComponent implements OnInit {
  @Input() 'ev': Theatre;
  @Input() 'index': number;

  onOff = false;
  info() {
    this.onOff = true;    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
