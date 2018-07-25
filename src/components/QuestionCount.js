import React from 'react';

function QuestionCount(props) {
    return (
        <div className="questionCount">
            Question <span>{props.counter}</span> of <span>{props.total}</span>
        </div>
    )
}

QuestionCount.propTypes = {
    counter: React.ProptTypes.number.isRequired,
    total: React.ProptTypes.number.isRequired
};

export default QuestionCount;