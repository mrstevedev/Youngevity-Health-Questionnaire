import React from 'react';

function Fact(props) {
    if (props.categoryId < 5) {
        return (
            <div className="fact">
                <p>{props.content}</p>
            </div>
        )
    } else return (
        null
    );
}

export default Fact;