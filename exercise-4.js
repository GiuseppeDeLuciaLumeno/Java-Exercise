function calculate() {

let score = 0;

    let operators = {

        add(num) {
            score = score + num;
            return this;
        },

        multiply(num){
            score = score * num;
            return this;
        },

        sub(num) {
        score = score - num
        return this;
        },

        divide(num) {
            score = score / num;
            return this;
        },

        printResult(){
            console.log(score);
        }
    }
    
return operators
}



const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7

