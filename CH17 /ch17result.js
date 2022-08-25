import {Pi,Calculator} from './ch17oop.js';

var calculator = new Calculator();
calculator.add(10).substract(5).result();
calculator.add(3).multiply(4).divide(6).result();
calculator.numberold = 7
console.log(`nilai sekarang : ${calculator.numberold}`)
calculator.multiply(2).multiply(Pi).result();
calculator.numberold = 7;
calculator.root().multiply(Pi).result();
calculator.numberold = 4;
calculator.exponent(3).result();
calculator.root().result();