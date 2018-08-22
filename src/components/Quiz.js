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
                        <Fact categoryId={this.props.categoryId} content={this.props.fact} />
                    </div>

                    <AnswerOptions
                        lastCategory={this.props.lastCategory}
                        categoryId={this.props.categoryId}
                        questionId={this.props.questionId}
                        name={this.props.name}
                        answers={this.props.answers}
                        onStickySelect={this.props.onStickySelect}
                        onAnswerSelected={this.props.onAnswerSelected} />
                </div>
                {this.props.categoryId === 5 ? <div className="category-5-btns">
                    <a className="prevBtn" href="#!" onClick={(e) => this.props.onPrevQuestion(this.props.questionId)}>Back</a>
                    <a className="nextBtn" href="#!" onClick={(e) => this.props.onAnswerSelected(e)}>Next</a>
                </div> : null}

                <div className="goBackBtn">
                    {this.props.questionId > 1 ? <a href={'#!'} onClick={(e) => this.props.onPrevQuestion(this.props.questionId)}> &#60; Go Back</a> : null}
                </div>
            </div>
        );
    }
}

export default Quiz;