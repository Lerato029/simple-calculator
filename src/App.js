/* Import statements to create the class component */
import React, { Component } from 'react';

/* importing css */
import './App.css';

/* importing Display and Buttons components */
import Display from './components/Display';
import Buttons from "./components/Buttons";



/* =======================================================The App Component================================== */
/* The app component contains the child components imported and defines the logic of the onclick function */
/* the Apps state object is allocated the output variable as it's property */

class App extends Component {
    /* Using the constructor method to initialize state where the initial value of the output variable is set to an
    empty string*/
    constructor(){
        super();
        this.state = {
            output: ""
        }
    }
    /* ================================The onclick function with button set as a parameter==================================== */
    /* Conditional statement used to check which button is checked to see if a function will be called or not*/
    onClick = button => {

        /* When the equals button is clicked the calculate function is called*/
        if(button === "="){
            this.calculate()
        }

        /* else when the clear button(C) is clicked the clearAll function is called*/
        else if(button === "C"){
            this.clearAll()
        }

        /* else when the clear entry button(CE) is clicked the clearAll function is called*/
        else if(button === "CE"){
            this.clearEntry()
        }

        /* else this.state.output data will have the value of the button appended to it  */
        else {
            this.setState({
                output: this.state.output + button
            })
        }
    };

    /* ========================================== Main Calculator Operations===========================*/
    /* Each of these main features use the setState method to update the state of the component */

    /* calculate this.state.output */
    calculate = () => {
        /* Using try and catch to handle errors*/
        try {
            this.setState({
                // using the eval function to compute the data in this.state.output 
                output: (eval(this.state.output) || "" ) + ""
               
            })
        /* output set to Sorry invalid! if computation fails */
        } catch (err) {
            this.setState({
                output: "Sorry invalid!"
            })

        }
    };

    /* set this.state.output to an empty string*/
    clearAll = () => {
        this.setState({
            output: ""
        })
    };

    /* remove the last character in this.state.output */
    clearEntry = () => {
        this.setState({
            output: this.state.output.slice(0, -1)
        })
    };


    /* ==============================Rendering the Display and Buttons Components */
    /* the output variable will store this.state.output to display the current output */
    /* the button elements in Buttons are registered with the onClick event handler*/
    render() {
        return (
            <div>
                <div className="calculatorContainer">
                    <h1 className="heading">Calculator</h1>
                    <Display output={this.state.output}/>
                    <Buttons onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;