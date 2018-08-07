import React from 'react';

export class Logo extends React.Component {
   

    componentDidMount() {
        console.log('logo component did mount');
    }

    render() {
        return (
            <a href="#!" className="logocolor logo" title="YGY Health Quiz" alt="Logo"></a>
        )
    }
}

export default Logo;