import backgroundMobile from '../assets/homepage/hero-bg-mobile.jpg';
import backgroundTablet from '../assets/homepage/hero-bg-tablet.jpg';
import backgroundDesktop from '../assets/homepage/hero-bg-desktop.jpg';
import logo from '../assets/logo.svg';

const Hero = () => {
    return (
        <div className="relative">
            {/*Mobile*/}
            <img
                src={backgroundMobile}
                alt="image of a pizza used as background image to the hero section"
                className="w-full sm:hidden"
            />
            {/*Tablet*/}
            <img
                src={backgroundTablet}
                alt="image of a pizza used as background image to the hero section"
                className="hidden sm:block lg:hidden w-full"
            />
            {/*Desktop*/}
            <img
                src={backgroundDesktop}
                alt="image of a pizza used as background image to the hero section"
                className="hidden lg:block w-full"
            />

            <div className="flex flex-col items-center justify-center text-white
            w-[90%] sm:w-[60%] absolute top-[30%] sm:top-[40%] left-[50%] -translate-x-[50%]
            lg:top-[15%] lg:left-[40%] lg:translate-x-auto lg:items-start">
                <img src={logo} alt="dine logo" className="mb-12 lg:mb-36" />

                <div className="text-4xl font-light flex flex-col items-center justify-center mb-8
                lg:items-start lg:text-7xl">
                    <div>Exquisite dining</div>
                    <div>since 1989</div>
                </div>

                <div className="font-2xl text-center mb-8 lg:text-left lg:max-w-[60%] lg:text-sm">
                    Experience our seasonal menu in beautiful country surroundings. Eat the freshest
                    produce from the comfort of our farmhouse.
                </div>

                <div className="w-full flex items-center justify-center lg:justify-start">
                    <input
                        type="button"
                        value="Book a table"
                        className="uppercase font-semibold border border-solid border-white py-4 px-16 w-full
                        sm:w-auto hover:bg-white hover:text-black cursor-pointer transition-colors duration-500"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;