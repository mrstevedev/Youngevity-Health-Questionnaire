import React from 'react';
import Filler from './Filler';

export class ProgressBar extends React.Component {

    render() {
        // This value holds the value of the progress bar. Must increment from 0 to 100%.

        const ProgressCategories = ['Joints & Bones', 'Metabolism & Energy', 'Brain & Heart Health', 'Digestion & Immunity', 'Additional Health Goals'];

        const ProgressList = ProgressCategories.map((category, index) => {
            return <li key={index} className={`${category} ${this.props.category === category ? 'current' : ''}`}>{category}</li>;
        });

        return (
            <div>
                <div className="progress">
                    <Filler percentage={this.props.percentage} />
                </div>
                <div className="progress-steps">
                    <ol>
                        {ProgressList}
                    </ol>
                </div>
            </div >
        )
    }
}

export default ProgressBar;