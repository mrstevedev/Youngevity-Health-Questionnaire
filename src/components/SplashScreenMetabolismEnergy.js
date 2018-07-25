import React from 'react';
import LogoWhite from '../svg/logo-white.svg';
import MetabolismEnergyIcon from '../svg/icon-meta.svg';

// Stateless Component // Takes props // props are available in stateless component
const SplashScreenMetabolismEnergy = (props) => {
    return (
        <div>
            <header>
                <img src={LogoWhite} />
            </header>
            <div class="SplashScreen-Meta">
                <div className="meta-icon">
                    <img src={MetabolismEnergyIcon} alt="LogoWhite" className="logo" />
                </div>
                <div className="splash-description">
                    <p class="splash-copy">
                        Now Let's talk about your metabolism and energy.
                    </p>
                </div>
                <div className="back">
                    <a href="#!">&lt;Back</a>
                </div>
            </div>
        </div>
    );
};

