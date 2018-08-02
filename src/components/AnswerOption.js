import React from 'react';
import PropTypes from 'prop-types';

function AnswerOption(props) {
    return (

        <div className="questionsAnswers">
            <ul className="answersList">
            {/* Loop through the answers and dynamically display the list of answers */}
                <a
                    id={props.answer}
                    onClick={props.onAnswerSelected}
                    className="reallypoor answer"
                    href="#!">
                    <li>Really Poor</li>             
                </a>
                <a
                    id={props.answer}
                    onClick={props.onAnswerSelected}
                    className="poor answer"
                    href="#!">
                    <li>Poor</li>
                </a>
                <a
                    id={props.answer}
                    onClick={props.onAnswerSelected}
                    className="fair answer"
                    href="#!">
                    <li>Fair</li>
                </a>
                <a
                    id={props.answer}
                    onClick={props.onAnswerSelected}
                    className="good answer"
                    href="#!">
                    <li>Good</li>
                </a>
                <a
                    id={props.answer}
                    onClick={props.onAnswerSelected}
                    className="great answer"
                    href="#!">
                    <li>Great</li>
                </a>
            </ul>
        </div>
    )
}

AnswerOption.propTypes = {
    answerType: PropTypes.string,
    onAnswerSelected: PropTypes.func.isRequired
}

export default AnswerOption;
