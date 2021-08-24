/* import statement to create the react class component*/
import React, {Component} from 'react';

/* =======================================================================Buttons class component================= */
class Buttons extends Component {
    /*some buttons assigned the operations class and the equals for some special css styling  */
    render() {
        return (
            <div className="buttonContainer">
                <button className="operations" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button className="operations" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button className="operations" name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button className="operations" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>
                

                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button className="operations" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>


                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button className="operations" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button className="operations" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button className="equalsButton" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button className="operations" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>
            </div>
        );
    /* The the this.props.OnClick function (where the logic of it will be determined in App.js) will be called every 
    time the user clicks on a Buttons (via onclick event) and pass e.target.name as its argument to register the value of the button. */
    }
}

export default Buttons;
/* exporting component so it can be imported */