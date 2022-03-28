import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  onOff = true;
  info() {
    this.onOff = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
