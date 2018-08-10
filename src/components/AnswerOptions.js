import React from 'react';
import PropTypes from 'prop-types';
import Questions from '../api/quizQuestions';
import { RadioGroup } from './RadioGroup';
import { CategoryAnswers } from './CategoryAnswers';

class AnswerOptions extends React.Component {

    componentDidMount() {
        if (this.props.lastCategory) {
            console.log('this is the last category, display different set of answer options');
        }
    }

    render() {

        if (this.props.categoryId > 4) {
            return <CategoryAnswers onAnswerSelected={this.props.onAnswerSelected}
            />
        } else
            return <RadioGroup
                lastCategory={this.props.lastCategory}
                categoryId={this.props.categoryId}
                questionId={this.props.questionId}
                name={this.props.name}
                answers={this.props.answers}
                onAnswerSelected={this.props.onAnswerSelected}
            />
    }
}

AnswerOptions.propTypes = {
    answerType: PropTypes.string,
    onAnswerSelected: PropTypes.func.isRequired
}

export default AnswerOptions;
