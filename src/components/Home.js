import React from 'react';
import { Button } from './Button';

export class Home extends React.Component {

    componentDidMount() {
        sessionStorage.clear();
        document.body.classList.add("logodefault");
        document.body.classList.add("background-start-screen");
    }

    componentWillUnmount() {
        document.body.classList.remove("logodefault");
        document.body.classList.remove("background-start-screen");
    }

    render() {
        return (
            <div className="introduction">
                <div className="sub-container">
                    <div className="quiz-title">
                        <h3>What are your</h3>
                        <h1 className="large-headline">Health Goals?</h1>
                    </div>
                    <h5>Help us help you live your best life</h5>
                    <p>
                        This is your starting point for better health through proper nutrition.
                        Just take a few minutes to answer some simple questions, and we can help you
                        identify your biggest health priorities. Based on your answers, we can recommend
                        the right Youngevity products for you.
                    </p>
                    <Button />
                </div>        
            </div>

        );
    }
}

export default Home;