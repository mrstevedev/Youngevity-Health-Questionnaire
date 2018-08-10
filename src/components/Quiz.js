import React from 'react';
import Question from './Question';
import Title from './Title';
import Fact from './Fact';
import AnswerOptions from './AnswerOptions';
import { ProgressBar } from './ProgressBar';

export class Quiz extends React.Component {

    componentDidMount() {
        document.body.classList.add('logocolor');
    }

    componentWillUnmount() {
        document.body.classList.remove('logodecolor');
    }

    handlePreviousQuestion() {
        this.props.onPrevQuestion;
    }

    render() {
        return (
            <div className="quizContainer">

                <ProgressBar
                    progressColor={this.props.progressColor}
                    percentage={this.props.percentage}
                    category={this.props.category}
                    categoryId={this.props.categoryId}
                />

                <div className="questions">

                    <div id="questionsContainer" className="questionsContainer">
                        <Question content={this.props.question} />
                        <Title content={this.props.title} />
                        <Fact content={this.props.fact} />
                    </div>

                    <AnswerOptions
                        lastCategory={this.props.lastCategory}
                        categoryId={this.props.categoryId}
                        questionId={this.props.questionId}
                        name={this.props.name}
                        answers={this.props.answers}
                        onAnswerSelected={this.props.onAnswerSelected}
                    />
                </div>
                <div className="goBackBtn">
                    <a onClick={this.props.handlePreviousQuestion}>Go Back</a>
                    {/* onClick get state of current questionId - 1 and then render previous questionId */}
                </div>
            </div>
        );
    }
}

export default Quiz;