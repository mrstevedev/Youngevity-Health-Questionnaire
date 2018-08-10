import React from 'react';

export class CategoryDescription extends React.Component {
    render() {
        return (
            <p className="splashText">
                {this.props.message}
            </p>
        );
    }
}

export default CategoryDescription;