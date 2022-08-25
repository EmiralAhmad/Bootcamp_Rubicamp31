export const Pi = 22/7 ;
export default class MesinHitung {
    numberold
    constructor(){
        this.numberold = 1;
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

    square() {
        this.numberold = Math.pow(this.numberold, 2)
    }

    root() {
        this.numberold = Math.sqrt(this.numberold)
        return this
    }

    exponent() {
        this.numberold = Math.pow(this.numberold, 3)
        return this;
    }

    result() {
        console.log(this.numberold)
    }
}