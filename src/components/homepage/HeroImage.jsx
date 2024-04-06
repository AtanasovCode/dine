import backgroundMobile from '../../assets/homepage/hero-bg-mobile.jpg';
import backgroundMobile2x from '../../assets/homepage/hero-bg-mobile@2x.jpg';
import backgroundTablet from '../../assets/homepage/hero-bg-tablet.jpg';
import backgroundTablet2x from '../../assets/homepage/hero-bg-tablet@2x.jpg';
import backgroundDesktop from '../../assets/homepage/hero-bg-desktop.jpg';
import backgroundDesktop2x from '../../assets/homepage/hero-bg-desktop@2x.jpg';

const HeroImage = () => {
    return (
        <>
            {/*Mobile*/}
            <img
                srcSet={`${backgroundMobile} 1x, ${backgroundMobile2x} 2x`}
                alt="image of a pizza used as background image to the hero section"
                className="w-full sm:hidden"
            />
            {/*Tablet*/}
            <img
                srcSet={`${backgroundTablet} 1x, ${backgroundTablet2x} 2x`}
                alt="image of a pizza used as background image to the hero section"
                className="hidden sm:block lg:hidden w-full"
            />
            {/*Desktop*/}
            <img
                srcSet={`${backgroundDesktop} 1x, ${backgroundDesktop2x} 2x`}
                alt="image of a pizza used as background image to the hero section"
                className="hidden lg:block w-full"
            />
        </>
    );
}

export default HeroImage;