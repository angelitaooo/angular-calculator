import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '/', '*'];
  value = '';

  clickedReceivedFromSon(event){
    console.log(event);
    this.value = this.value + event;
  }

  calcular(){
    this.value = eval(this.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
