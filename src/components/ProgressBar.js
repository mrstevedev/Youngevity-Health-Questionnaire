import React from 'react';

export class ProgressBar extends React.Component {
    render() {
        // This value holds the value of the progress bar. Must increment from 0 to 100%.
        let newProgress = 20;
        
        
        // Create an array of categories
        const ProgressCategories = ['Joints & Bones', 'Metabolism & Energy','Brain & Heart Health','Digestion & Immunity','Additional Health Goals'];
        
        // Map through the categories and return a category

        const ProgressList = ProgressCategories.map((category) => {
            return <li>{category}</li>;
        });

        // Set State
        

        return (
            <div>
                <div class="progress">
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