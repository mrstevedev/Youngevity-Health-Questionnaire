import React from 'react';
import LogoWhite from '../svg/logo-white.svg';
import JointsBonesTeethIcon from '../svg/icon-joints.svg';

// Stateless Component // Takes props // props are available in stateless component
const SplashScreenJointsBonesTeeth = (props) => {
    return (
        <div>
            <header>
                <img src={LogoWhite} />
            </header>
            <div class="SplashScreen-just">
                <div className="just-icon">
                    <img src={JointsBonesTeethIcon} alt="LogoWhite" className="logo" />
                </div>
                <div className="splash-description">
                    <p class="splash-copy">
                        Let's start with joints, bones & teeth.
                    </p>
                </div>
            </div>
        </div>
    );
};

