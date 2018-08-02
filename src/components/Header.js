import React from 'react';
import Logo from '../components/Logo';

export class Header extends React.Component {
    render() {
        return (
            <div className="row">
                <header className="header">
                    <Logo logo={this.props.logo} />
                </header>
            </div>
        );
    }
}

export default Header;