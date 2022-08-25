export const Pi = 22/7 ;
export default class Calculator {
    numberold
    numbernew
    constructor(){
        this.numberold = 1;
        this.numbernew = this.numberold;
    }

    initialNumber(numberold) {
        return (numberold)
    }
    
    add(number) {
        this.numberold += number
        return this
    }

    substract(number) {
        this.numberold -= number
        return this
    }

    multiply(number) {
        this.numberold *= number
    }

    divide(number) {
        this.numberold /= number
    }

    root() {
        this.numberold = Math.sqrt(this.numberold)
        return this
    }

    exponent() {
        this.numberold **= number
        return this;
    }

    result() {
        console.log(this.numberold)
    }
}