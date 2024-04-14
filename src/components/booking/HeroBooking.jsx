import { Link } from 'react-router-dom';

//importing hero image
import desktop from '../../assets/booking/hero-bg-desktop.jpg';
import desktopx2 from '../../assets/booking/hero-bg-desktop@2x.jpg';
import tablet from '../../assets/booking/hero-bg-tablet.jpg';
import tabletx2 from '../../assets/booking/hero-bg-tablet@2x.jpg';
import mobile from '../../assets/booking/hero-bg-mobile.jpg';
import mobilex2 from '../../assets/booking/hero-bg-mobile@2x.jpg';

import logo from '../../assets/logo.svg';

const HeroBooking = () => {
    return (
        <div className="
            w-full max-h-[90vh] overflow-hidden flex items-start justify-center relative text-white
            lg:max-h-auto
        ">
            <picture className="w-full">
                {/*Mobile*/}
                <source
                    media="(max-width: 700px)"
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

            <div className="
                flex flex-col items-center justify-center absolute top-16 lg:ml-12
                lg:h-full lg:items-start lg:justify-between
            ">
                <Link to="/" className="
                    mb-16 w-full flex items-center justify-center cursor-pointer
                    sm:justify-start sm:ml-24 lg:ml-0 lg:mb-0 
                ">
                    <img
                        src={logo}
                        alt="dine logo"
                    />
                </Link>
                <div className="
                    w-full h-full flex flex-col items-center justify-center
                    lg:items-start
                ">
                    <div className="text-4xl font-light mb-8 sm:text-5xl">
                        Reservations
                    </div>
                    <div className="
                    mb-8 text-center mx-[10vw] 
                    sm:max-w-[70%] sm:mx-0 sm:text-xl md:max-w-[50%] lg:text-left lg:max-w-[40%]
                ">
                        We can’t wait to host you. If you have any special
                        requirements please feel free to call on the phone number
                        below. We’ll be happy to accommodate you.
                    </div>
                    <div>
                        <input
                            type="button"
                            value="reserve place"
                            className="
                            uppercase font-semibold bg-transparent border-2 border-solid border-white px-20 py-6 cursor-pointer
                            hover:border-none hover:bg-white hover:text-cod-gray transition-all duration-500
                        "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroBooking;