import React from 'react';
import Question from './Question';
import Title from './Title';
import Fact from './Fact';
import AnswerOption from './AnswerOption';
import { ProgressBar } from './ProgressBar';

export class Quiz extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {

        return (
            <div className="quizContainer">

                <ProgressBar 
                    category={this.props.category} 
                    isCurrent={this.props.isCurrent}
                    />

                <div className="questions">

                    <div className="questionsContainer">
                        <Question content={this.props.question} />
                        <Title content={this.props.title} />
                        <Fact content={this.props.fact} />
                    </div>

                    <AnswerOption
                        //key={key.content}
                        //answerContent={key.content}
                        //answerType={key.type}
                        answer={this.props.answer}
                        questionId={this.props.questionId}
                        onAnswerSelected={this.props.onAnswerSelected}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;