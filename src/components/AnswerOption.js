import React from 'react';
import PropTypes from 'prop-types';
import Questions from '../api/quizQuestions';

class AnswerOption extends React.Component {
    
    render() {

        const Answers = Questions.slice(0, 5).map((answer, i) => {
            return <a
                key={i}
                href={'#!'}
                data-value={Questions[i].answers[i].answer.toLowerCase()}
                id={Questions[i].answers[i].answer.toLowerCase()}
                onClick={(e) => this.props.onAnswerSelected(e, i)}
                className={`${Questions[i].answers[i].answer.toLowerCase()} ${'answer'}`}>
                <li>{Questions[i].answers[i].answer}</li>
            </a>
        });

        return (

            <div className="questionsAnswers">
                <ul className="answersList">
                    {Answers}
                </ul>
            </div>
        )
    }
}

AnswerOption.propTypes = {
    answerType: PropTypes.string,
    onAnswerSelected: PropTypes.func.isRequired
}

export default AnswerOption;
