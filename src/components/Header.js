import React from 'react';
import Logo from './Logo';

export class Header extends React.Component {

    render() {
        return (
            <div className="row">
                <header className="header">
                    <Logo logowhite={this.props.logowhite} />
                </header>
            </div>
        );
    }
}

export default Header;