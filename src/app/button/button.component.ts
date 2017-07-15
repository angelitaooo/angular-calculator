import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
   @Input()
    button;

  @Output()
    clicked: EventEmitter<any> = new EventEmitter();

   handleClick() {
     this.clicked.emit(this.button);
   }

}
