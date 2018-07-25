import React from 'react';

export class Button extends React.Component {

    handleClick(e) {

    }

    render(){
        return(
            <div>
                <button className="button btn" onClick={this.handleClick}>
                    Get Started
                </button>
            </div>
        )
    }
}

export default Button;