import React from 'react';

export class HeaderGreeting extends React.Component {
    render() {
        return (
            <h3>{this.props.counter == null ? 'Hi' + ' ' + sessionStorage.getItem('firstname') + '!' : ''}</h3>
        );
    }
}

export default HeaderGreeting;