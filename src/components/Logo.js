import React from 'react';

export class Logo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            default: true
        }
    }

    componentDidMount() {
        console.log('logo component did mount');
    }

    render() {
        return (
            <a href="#!" className="logocolor logo"></a>
            //<img src={this.props.logowhite} className="logocolor logo" alt="logocolor" />);
        )
    }
}

export default Logo;