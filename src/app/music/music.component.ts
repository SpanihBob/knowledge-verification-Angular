import { Component, Input, OnInit } from '@angular/core';
import { Music } from '../app.component';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  @Input() 'ev': Music;
  @Input() 'index': number;
  onOff = false;
  info() {
    this.onOff = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
