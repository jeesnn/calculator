import React from 'react';

class Calculator extends React.Component {
    constructor() {
        super();
        this.state = { num1: "", num2: "", result: 0}; //initialize state to 2 nums and sum is 0
        this.setNum1 = this.setNum1.bind(this); //initialize and bind num1 to instance of calculator to be used throughout the class component
        this.setNum2 = this.setNum2.bind(this); //initialize and bind num2 to instance of calculator to be used throughout the class component
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Calculator;
