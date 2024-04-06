import backgroundMobile from '../assets/homepage/hero-bg-mobile.jpg';
import logo from '../assets/logo.svg';

const Hero = () => {
    return (
        <div className="relative">
            <img src={backgroundMobile} alt="image of a pizza used as background image to the hero section" />

            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
                <img src={logo} alt="dine logo" />

                <div>
                    Exquisite dining
                    since 1989
                </div>
            </div>
        </div>
    );
}

export default Hero;