import React from 'react';

export class Logo extends React.Component {
    render() {
        return (
            <img src={this.props.logo} className="logocolor logo" alt="logocolor" />);
    }
}

export default Logo;