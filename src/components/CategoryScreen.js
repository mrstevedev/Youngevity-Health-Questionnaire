import React from 'react';
import splashData from '../api/splashData';
import CategoryDescription from '../components/CategoryDescription';

export class CategoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: null,
            message: null
        }
    }

    componentDidMount() {
        document.body.classList.add('logodefault');

        if (this.props.categoryId === 1) {
            document.body.classList.add('background-joint-screen');
            this.setState({
                icon: splashData.categoryOne.icon,
                message: splashData.categoryOne.message
            });

        } else if (this.props.categoryId === 2) {
            document.body.classList.add('background-meta-screen');
            this.setState({
                icon: splashData.categoryTwo.icon,
                message: splashData.categoryTwo.message
            });
        } else if (this.props.categoryId === 3) {
            document.body.classList.add('background-heart-screen');
            this.setState({
                icon: splashData.categoryThree.icon,
                message: splashData.categoryThree.message
            });
        } else if (this.props.categoryId === 4) {
            document.body.classList.add('background-digest-screen');
            this.setState({
                icon: splashData.categoryFour.icon,
                message: splashData.categoryFour.message
            });
        } else if (this.props.categoryId === 5) {
            document.body.classList.add('background-more-screen');
            this.setState({
                icon: splashData.categoryFive.icon,
                message: splashData.categoryFive.message
            });
        }
        this.redirectToQuiz();
    }

    componentWillUnmount() {

        if (this.props.categoryId === 1) {
            document.body.classList.remove("background-joint-screen");
        } else if (this.props.categoryId === 2) {
            document.body.classList.remove('background-meta-screen');
        } else if (this.props.categoryId === 3) {
            document.body.classList.remove('background-heart-screen');
        } else if (this.props.categoryId === 4) {
            document.body.classList.remove('background-digest-screen');
        } else if (this.props.categoryId === 5) {
            document.body.classList.remove('background-more-screen');
        }
    }

    redirectToQuiz() {
        setTimeout(() => {
            this.props.updater(this.state);
        }, 1000);
    }

    render() {

        return (
            <div>
                <div className="sub-container splash">
                    <img src={this.state.icon} alt={'LogoWhite'} className="splashIcon" />
                    <div className="splashDescription">
                        <CategoryDescription message={this.state.message} />
                    </div>
                    <div className="back">
                        <a onClick={this.onNavigatePrevious}>&lt; Back</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CategoryScreen;