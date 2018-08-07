import React from 'react';
import JointsBonesTeethIcon from '../svg/icon-joints.svg';

export class SplashScreenJointsBonesTeeth extends React.Component {

    componentDidMount() {
        console.log('splash screen mounted');

        document.body.classList.add('background-joint-screen');
        document.body.classList.add('logodefault');

        this.setState({
            firstname: sessionStorage.getItem('firstname'),
        });
        console.log('you will be redirected to the quiz in 4 seconds');
        
        this.redirectToSplashScreen();
    }

    componentWillUnmount() {
        document.body.classList.remove('logodefault')
        document.body.classList.remove("background-joint-screen");
    }

    redirectToSplashScreen() {
        setTimeout(() => {
            this.props.updater(this.state);
        }, 4000);
    }

    render() {
        return (
            <div>
                <div className="">
                    <div className="sub-container splash">
                        <img src={JointsBonesTeethIcon} alt={'LogoWhite'} className="splashIcon" />
                        <div className="splashDescription">
                            <p className="splashText">
                                Let's start with joints, bones & teeth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default SplashScreenJointsBonesTeeth;
