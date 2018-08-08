import React from 'react';

export class OverviewGreetingStart extends React.Component {
    render() {
        return (
            <p className="list-view-text">
                {this.props.message}
            </p>
        );
    }
}

export default OverviewGreetingStart;