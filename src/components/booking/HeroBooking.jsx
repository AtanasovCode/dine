import desktop from '../../assets/booking/hero-bg-desktop.jpg';
import desktopx2 from '../../assets/booking/hero-bg-desktop@2x.jpg';
import tablet from '../../assets/booking/hero-bg-tablet.jpg';
import tabletx2 from '../../assets/booking/hero-bg-tablet@2x.jpg';
import mobile from '../../assets/booking/hero-bg-mobile.jpg';
import mobilex2 from '../../assets/booking/hero-bg-mobile@2x.jpg';

import logo from '../../assets/logo.svg';

const HeroBooking = () => {
    return (
        <div className="w-full min-h-[100vh] flex items-start justify-center relative text-white">
            <picture className="w-full">
                {/*Mobile*/}
                <source
                    media="(max-width: 600px)"
                    srcSet={`${mobile} 1x, ${mobilex2} 2x`}
                />
                {/*Tablet*/}
                <source
                    media="(max-width: 1200px)"
                    srcSet={`${tablet} 1x, ${tabletx2} 2x`}
                />
                <img
                    srcSet={`${desktop} 1x, ${desktopx2} 2x`}
                    alt="decorative background image"
                    className="w-full"
                />
            </picture>

            <div className="flex flex-col items-center justify-center absolute top-16">
                <div className="mb-16">
                    <img
                        src={logo}
                        alt="dine logo"
                    />
                </div>
                <div className="text-4xl font-light mb-8">
                    Reservations
                </div>
                <div className="mb-8 text-center">
                    We can’t wait to host you. If you have any special
                    requirements please feel free to call on the phone number 
                    below. We’ll be happy to accommodate you.
                </div>
                <div>
                    <input 
                        type="button"
                        value="reserve place"
                        className="uppercase font-semibold bg-transparent border-2 border-solid border-white px-20 py-6"
                    />
                </div>
            </div>
        </div>
    );
}

export default HeroBooking;