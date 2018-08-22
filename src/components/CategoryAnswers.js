import React from 'react';
import Questions from '../api/quizQuestions';

export class CategoryAnswers extends React.Component {

    render() {
        const CategoryAnswersArr = Questions.filter((obj) => {
            return obj.answerType === 'checkbox'
        }).map((obj, i) => {
            return <a
                key={i}
                href={'#!'}
                className={`qId-${obj.questionId} newCatFive`}
                onClick={(e) => this.props.onStickySelect(e, i)}>
            </a>
        });
        return (
            <div className="categoryAnswerOption">
                <ul className="answersList newCategoryList">
                    {CategoryAnswersArr}
                </ul>
            </div>

        )
    }
}
export default CategoryAnswers;