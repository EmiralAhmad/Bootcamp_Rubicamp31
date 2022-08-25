import {Pi,MesinHitung} from './ch17oop.js';

var mh = new MesinHitung();
mh.add(10).substract(5).result();
mh.add(3).multiply(4).divide(6).result();
mh.numberold = 7
console.log(`nilai sekarang : ${mh.numberold}`)
mh.multiply(2).multiply(Pi).result();
mh.numberold = 7;
mh.square().multiply(Pi).result();
mh.numberold = 4;
mh.exponent(3).result();
calculator.root().result();