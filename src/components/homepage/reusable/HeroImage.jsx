import backgroundMobile from '../../../assets/homepage/hero-bg-mobile.jpg';
import backgroundMobile2x from '../../../assets/homepage/hero-bg-mobile@2x.jpg';
import backgroundTablet from '../../../assets/homepage/hero-bg-tablet.jpg';
import backgroundTablet2x from '../../../assets/homepage/hero-bg-tablet@2x.jpg';
import backgroundDesktop from '../../../assets/homepage/hero-bg-desktop.jpg';
import backgroundDesktop2x from '../../../assets/homepage/hero-bg-desktop@2x.jpg';

const HeroImage = () => {
    return (
        <picture className="w-full flex items-center justify-end">
            {/*Tablet*/}
            <source
                media='(max-width: 600px)'
                srcSet={`${backgroundMobile} 1x, ${backgroundMobile2x} 2x`}
            />
            {/*Desktop*/}
            <source
                media='(max-width: 1199px)'
                srcSet={`${backgroundTablet} 1x, ${backgroundTablet2x} 2x`}
            />
            {/*Mobile*/}
            <img
                srcSet={`${backgroundDesktop} 1x, ${backgroundDesktop2x} 2x`}
                alt="image of a pizza used as background image to the hero section"
                className="max-h-[150vh]"
            />
        </picture>
    );
}

export default HeroImage;