import React from 'react';
import logo from '../svg/logo.svg';

export class Header extends React.Component {
    render(){
        return(
        <div className="row">
            <header className="header">
                <img src={logo} className="logo" alt="logo" />            
            </header>
        </div>
        );
    }
}

export default Header;