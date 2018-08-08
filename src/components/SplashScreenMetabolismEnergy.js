import React from 'react';
import MetabolismEnergyIcon from '../svg/icon-meta.svg';

export class SplashScreenMetabolismEnergy extends React.Component {
    componentDidMount() {
        console.log('splash screen mounted');
        document.body.classList.add('background-meta-screen');
        document.body.classList.add('logodefault');

        this.redirectToSplashScreen();
    }

    componentWillUnmount() {
        document.body.classList.remove('background-meta-screen');
        document.body.classList.remove('logocolor');
    }

    redirectToSplashScreen() {
        console.log('you will be redirected to the next section in 4 seconds');

        setTimeout(() => {
            this.props.updater(this.state);
            console.log('redirecting to quiz now');
        }, 4000);
    }

    render() {
        return (
            <div>
                <div className="sub-container splash">
                    <img src={MetabolismEnergyIcon} alt="LogoWhite" className="splashIcon" />
                    <div className="splashDescription">
                        <p className="splashText">
                            Now Let's talk about your metabolism and energy.
                    </p>
                    </div>
                    <div className="back">
                        <a href="#!">&lt;Back</a>
                    </div>
                </div>
            </div >
        );
    };
}
export default SplashScreenMetabolismEnergy;
