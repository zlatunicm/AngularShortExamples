import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  A= 0;
  B= 0;
  rezultat=0;

  constructor() { }

  ngOnInit() {
  }


 addition() {

  this.rezultat= +this.A + +this.B
 }

 subtraction() {

  this.rezultat= +this.A - +this.B
 }

  multiplication() {

  this.rezultat= +this.A * +this.B
 }


  partition() {

  this.rezultat= +this.A / +this.B
 }

}
