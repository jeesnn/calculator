import React from 'react';

class Calculator extends React.Component {
    constructor() { //no props passed in
        super(); //no props
        this.state = { num1: "", num2: "", result: 0}; //initialize state to 2 nums and sum is 0
        this.setNum1 = this.setNum1.bind(this); //initialize and bind num1 to instance of calculator to be used throughout the class component
        this.setNum2 = this.setNum2.bind(this); //initialize and bind num2 to instance of calculator to be used throughout the class component

        //bind the standard calculator operations to the class to allow use math operations in the class component
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.clear = this.clear.bind(this); //allow restart calculation default to sum 0
    }

    setNum1(e) { //input event (Note: events are to be observed not mutated or intercepted)
        const num1 = e.target.value ? parseInt(e.target.value) : ""; //declare num1 to an integer, parse digits
        this.setState({ num1 }); //set state of num1
    } 

    setNum2(e) {
        const num2 = e.target.value ? parseInt(e.target.value) : ""; //declare num2 to an integer, parse digits too
        this.setState({ num2 }); //set state of num2
    }

    //set state of each math operation on calculator
    add(e) {
        //prevents default action associated with the event
        e.preventDefault(); //allows stop event (event's default side effect) from occurring 
        const result = this.state.num1 + this.state.num2; //add operation of 2 nums
        this.setState = ({ result }); //set state of add result for additional calculations
    }

    subtract(e) {
        e.preventDefault();
        const result = this.state.num1 - this.state.num2; //subtract math operation
        this.setState = ({ result });  //set state of subtract result
    }

    multiply(e) {
        e.preventDefault();
        const result = this.state.num1 * this.state.num2; //multiply operation
        this.setState = ({ result });
    }

    divide(e) {
        e.preventDefault();
        const result = this.state.num1 / this.state.num2; //divide operation
        this.setState = ({ result });
    }

    clear(e) { //clear function means no num1 and num2 defined and result is default 0
        e.preventDefault();
        this.setState({ num1: "", num2: "", result: 0 }); //reset num1, num2, result in state to be 0
    }

    render() {
        const { num1, num2, result } = this.state;
        return (
            <div>
                <h1>{result}</h1>

                
            </div>
        );
    }
}

export default Calculator;
