import React from 'react';
import Question from './Question';
import Title from './Title';
import Fact from './Fact';
import AnswerOption from './AnswerOption';
import { ProgressBar } from './ProgressBar';

export class Quiz extends React.Component {

    componentDidMount() {
        document.body.classList.add('logocolor');
    }

    componentWillUnmount() {
        document.body.classList.remove('logodecolor');
    }

    render() {
        return (
            <div className="quizContainer">

                <ProgressBar
                    percentage={this.props.percentage}
                    category={this.props.category}
                    questionId={this.props.questionId}
                />

                <div className="questions">

                    <div id="questionsContainer" className="questionsContainer">
                        <Question content={this.props.question} />
                        <Title content={this.props.title} />
                        <Fact content={this.props.fact} />
                    </div>

                    <AnswerOption
                        //key={key.content}
                        //answerContent={key.content}
                        //answerType={key.type}
                        name={this.props.name}
                        answers={this.props.answers}
                        questionId={this.props.questionId}
                        onAnswerSelected={this.props.onAnswerSelected}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;