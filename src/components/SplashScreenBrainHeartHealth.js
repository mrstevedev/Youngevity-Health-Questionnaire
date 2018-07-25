import React from 'react';
import LogoWhite from '../svg/logo-white.svg';
import BrainHeartHealthIcon from '../svg/icon-brain.svg';

// Stateless Component // Takes props // props are available in stateless component
const SplashScreenBrainHeartHealth = (props) => {
    return (
        <div>
            <header>
                <img src={LogoWhite} />
            </header>
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

