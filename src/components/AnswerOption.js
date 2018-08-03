import React from 'react';
import PropTypes from 'prop-types';
import Questions from '../api/quizQuestions';

class AnswerOption extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const Answers = Questions.slice(0, 5).map((answer, i) => {
            return <a
                key={i}
                href={'#!'}
                id={Questions[i].answers[i].answer}
                onClick={this.props.onAnswerSelected}
                className={`${Questions[i].answers[i].answer.toLowerCase()} ${'answer'}`}>
                <li>{Questions[i].answers[i].answer}</li>
            </a>
        });

        return (

            <div className="questionsAnswers">
                <ul className="answersList">
                    {/* Loop through the answers from the quizQuestions array of objects file and dynamically display the list of answers */}
                    {Answers}
                    {/* <a
                        id={this.props.answer}
                        onClick={this.props.onAnswerSelected}
                        className="reallypoor answer"
                        href="#!">
                        <li>Really Poor</li>
                    </a>
                    <a
                        id={this.props.answer}
                        onClick={this.props.onAnswerSelected}
                        className="poor answer"
                        href="#!">
                        <li>Poor</li>
                    </a>
                    <a
                        id={this.props.answer}
                        onClick={this.props.onAnswerSelected}
                        className="fair answer"
                        href="#!">
                        <li>Fair</li>
                    </a>
                    <a
                        id={this.props.answer}
                        onClick={this.props.onAnswerSelected}
                        className="good answer"
                        href="#!">
                        <li>Good</li>
                    </a>
                    <a
                        id={this.props.answer}
                        onClick={this.props.onAnswerSelected}
                        className="great answer"
                        href="#!">
                        <li>Great</li>
                    </a> */}
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
