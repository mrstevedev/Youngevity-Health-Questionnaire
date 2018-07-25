import React from 'react';
import { Button } from './Button';


export class Introduction extends React.Component {
    render() {
        return (
            <div className="introduction">
                <div className="sub-container">
                    <div className="quiz-title">
                        <h5>What are your</h5>
                        <h1 className="large-headline">Health Goals?</h1>
                    </div>
                    <h4>Help us help you live your best life</h4>
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

export default Introduction;