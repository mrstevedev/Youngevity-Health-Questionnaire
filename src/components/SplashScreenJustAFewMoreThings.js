import React from 'react';
import LogoWhite from '../svg/logo-white.svg';
import JustAFewMoreThingsIcon from '../svg/icon-just.svg';

// Stateless Component // Takes props // props are available in stateless component
const SplashScreenJustAFewMoreThings = (props) => {
    return (
        <div>
            <header>
                <img src={LogoWhite} />
            </header>
            <div class="SplashScreen-just">
                <div className="just-icon">
                    <img src={JustAFewMoreThingsIcon} alt="LogoWhite" className="logo" />
                </div>
                <div className="splash-description">
                    <p class="splash-copy">
                        Just a few more things.
                    </p>
                </div>
                <div className="back">
                    <a href="#!">&lt;Back</a>
                </div>
            </div>
        </div>
    );
};

