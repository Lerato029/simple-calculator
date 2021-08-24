/* import statement to create the react class component*/
import React, {Component} from 'react';

/* ========================================The Display class component==================================================== */
/* The display class component to display the output of the computations in the p element */
class Display extends Component {
    /* The value of the output will be retrieved from the parent component App.js */
    render() {
        let {output} = this.props;
        return (
            <div className="output">
                <p>{output}</p>
            </div>
        );
    }
}

export default Display;
/* exporting component so it can be imported */