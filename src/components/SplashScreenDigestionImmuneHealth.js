import React from 'react';
import LogoWhite from '../svg/logo-white.svg';
import DigestionImmuneHealthIcon from '../svg/icon-digestion.svg';

// Stateless Component // Takes props // props are available in stateless component
const SplashScreenDigestionImmuneHealth = (props) => {
    return (
        <div>
            <header>
                <img src={LogoWhite} />
            </header>
            <div class="SplashScreen-digestion">
                <div className="meta-icon">
                    <img src={DigestionImmuneHealthIcon} alt="LogoWhite" className="logo" />
                </div>
                <div className="splash-description">
                    <p class="splash-copy">
                        Now Let's talk about your digestion & immune health.
                    </p>
                </div>
                <div className="back">
                    <a href="#!">&lt;Back</a>
                </div>
            </div>
        </div>
    );
};

