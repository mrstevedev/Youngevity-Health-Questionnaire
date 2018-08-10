import React from 'react';

const Filler = (props) => {
    return (
        <div className={`progress-bar ${props.progressColor}`}
            role="progressbar"
            style={{ width: `${props.percentage}%` }}>
        </div>
    )
}

export default Filler;