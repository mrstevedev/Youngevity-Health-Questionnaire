import React from 'react';

const Filler = (props) => {
    return (
        <div className="progress-bar progress-dark-orange"
            role="progressbar"
            style={{ width: `${props.percentage}%` }}>
        </div>
    )
}

export default Filler;