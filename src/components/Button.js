import React from 'react';
import { Link } from "react-router-dom";

export class Button extends React.Component {

    render() {
        return (
            <div>
                <Link to="/whats-your-first-name" >
                    <input className="button btn" defaultValue="Get Started" />
                </Link>
            </div>
        )
    }
}

export default Button;