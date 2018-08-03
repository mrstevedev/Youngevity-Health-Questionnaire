import React from 'react';
import quizQuestions from '../api/quizQuestions';

export class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //set state of the categories in progressbar
        }
    }

    render() {
        // This value holds the value of the progress bar. Must increment from 0 to 100%.
        let newProgress = 20;

        // Create an array of categories
        const ProgressCategories = ['Joints & Bones', 'Metabolism & Energy', 'Brain & Heart Health', 'Digestion & Immunity', 'Additional Health Goals'];

        // Map through the categories and return a category
        const ProgressList = ProgressCategories.slice(0, 1).map((category, index) => {
            return <li key={index} className={`${category} ${this.props.category === category ? 'current' : ''}`}>{category}</li>;
        });

        // Map through the categories and return a category
        //   const ProgressCategories = quizQuestions.map((category, index) => {
        //     //return <li key={index} className={`${category} ${this.props.category === category ? 'current' : ''}`}>{category}</li>
        //     console.log();
        // });


        return (
            <div>
                <div className="progress">
                    <div className="progress-bar progress-dark-orange"
                        role="progressbar"
                        style={{ width: newProgress + '%' }}>
                    </div>
                </div>
                <div className="progress-steps">
                    <ol>
                        {/*Show certain categories depending on the state of the application*/}
                        {ProgressList}
                    </ol>
                </div>
            </div>
        )
    }
}

export default ProgressBar;