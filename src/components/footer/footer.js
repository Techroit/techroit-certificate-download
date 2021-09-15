import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <>
            <footer>
                <span><strong>Techroit Solutions</strong></span>
                <svg>
                    <defs>
                        <clipPath id="wave" clipPathUnits="objectBoundingBox">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 0.0579677L0.0416667 0.192544C0.0833333 0.32712 0.166667 0.596272 0.25 0.66356C0.333333 0.730848 0.416667 0.596272 0.5 0.439267C0.583333 0.282261 0.666667 0.102826 0.75 0.0355384C0.833333 -0.0317497 0.916667 0.013109 0.958333 0.0355384L1 0.0579677V1H0.958333C0.916667 1 0.833333 1 0.75 1C0.666667 1 0.583333 1 0.5 1C0.416667 1 0.333333 1 0.25 1C0.166667 1 0.0833333 1 0.0416667 1H0V0.0579677Z" fill="#7ACA9C" />
                        </clipPath>
                    </defs>
                </svg>
            </footer>
        </>

    );
}

export default Footer;