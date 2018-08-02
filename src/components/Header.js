import React from 'react';
import Logo from '../components/Logo';

export class Header extends React.Component {
    constructor(props){
        super(props);
    }
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