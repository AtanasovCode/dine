import backgroundMobile from '../assets/homepage/hero-bg-mobile.jpg';
import backgroundTablet from '../assets/homepage/hero-bg-tablet.jpg';
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
                className="hidden sm:block w-full"
            />
            {/*Desktop*/}

            <div className="w-[90%] sm:w-[60%] absolute top-[30%] sm:top-[40%] left-[50%] -translate-x-[50%] flex flex-col items-center justify-center text-white">
                <img src={logo} alt="dine logo" className="mb-12" />

                <div className="text-4xl font-light text-center flex flex-col items-center justify-center mb-8">
                    <div>Exquisite dining</div>
                    <div>since 1989</div>
                </div>

                <div className="font-2xl text-center mb-8">
                    Experience our seasonal menu in beautiful country surroundings. Eat the freshest
                    produce from the comfort of our farmhouse.
                </div>

                <div className="w-full flex items-center justify-center">
                    <input
                        type="button"
                        value="Book a table"
                        className="uppercase font-semibold border border-solid border-white py-4 px-16 w-full
                        sm:w-auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;