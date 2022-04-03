import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewservicesService {
  consoleText(arg: any) {
    console.log(arg);
    
  }

  constructor() { }
}
