import React from 'react';
import Questions from '../api/quizQuestions';

export class CategoryAnswers extends React.Component {

    render() {
        const CategoryAnswersArr = Questions.filter((obj) => {
            return obj.answerType === 'checkbox'
        }).map((obj, i) => {
            return <a 
                    href={'#!'} 
                    className={`catId-${obj.categoryId} newCatFive`}
                    onClick={(e) => this.props.onAnswerSelected(e, i)}
                    >
                        {obj.answers[0].answer}
                    </a>
        });
        console.log(CategoryAnswersArr);

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