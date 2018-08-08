import React from 'react';
import BrainHeartHealthIcon from '../svg/icon-heart.svg';

// Stateless Component // Takes props // props are available in stateless component
export class SplashScreenBrainHeartHealth extends React.Component {


    componentDidMount() {
        console.log('splash screen mounted');

        
    }

   
    render() {
        return (
            <div>
                <div class="SplashScreen-Brain">
                    <div className="meta-icon">
                        <img src={BrainHeartHealthIcon} alt="LogoWhite" className="logo" />
                    </div>
                    <div className="splash-description">
                        <p class="splash-copy">
                            Now Let's talk about your brain & heart health.
                    </p>
                    </div>
                    <div className="back">
                        <a href="#!">&lt;Back</a>
                    </div>
                </div>
            </div>
        );
    };
}

export default SplashScreenBrainHeartHealth;