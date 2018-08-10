import React from 'react';
import Filler from './Filler';

export class ProgressBar extends React.Component {

    render() {
        // This value holds the value of the progress bar. Must increment from 0 to 100%.

        const ProgressCategories = ['Joints & Bones', 'Metabolism & Energy', 'Brain & Heart Health', 'Digestion & Immunity', 'Additional Health Goals'];

        const ProgressList = ProgressCategories.map((currCategory, index) => {
            return <li key={index} className={`${currCategory} ${this.props.category === currCategory ? 'current' : ''}`}>{currCategory}</li>;
        });

        return (
            <div>
                <div className="progress">
                    <Filler
                        progressColor={this.props.progressColor}
                        category={this.props.category}
                        percentage={this.props.percentage} />
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