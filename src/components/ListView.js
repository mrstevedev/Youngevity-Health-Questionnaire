import React from 'react';

export class ListView extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const categories = ['Joints, Bones & Teeth', 'Metabolism', 'Brain & Heart Health', 'Digestion & Immunity', 'Additional Health Goals'];
        const newList = categories.map((category, i) => {
            return <li className="overview-list-item" key={i}>{category}</li>
        });

        return (
            <div className="progress-categories-list">
                <h3>Hi {this.props.firstName}!</h3>
                <p>Here's what we'll be covering, and it should only take a few minutes:</p>
                <ol>
                    {newList}
                </ol>
            </div>
        )
    }
}

export default ListView;