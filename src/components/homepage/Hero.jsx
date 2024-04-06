import HeroImage from './HeroImage';
import logo from '../../assets/logo.svg';

const Hero = () => {
    return (
        <div className="relative">
            <HeroImage />

            <div className="flex flex-col items-center justify-center text-white
            w-[90%] sm:w-[80%] absolute top-[30%] sm:top-[40%] left-[50%] -translate-x-[50%]
            lg:top-[15%] lg:left-[50%] lg:translate-x-auto lg:items-start">
                <img src={logo} alt="dine logo" className="mb-12 w-24 sm:w-28 lg:mb-36" />

                <div className="text-3xl font-light flex flex-col items-center justify-center mb-8
                sm:text-5xl lg:items-start lg:text-7xl">
                    <div>Exquisite dining</div>
                    <div>since 1989</div>
                </div>

                <div className="font-base sm:font-xl text-center mb-8 sm:max-w-[70%] lg:text-left lg:max-w-[50%]">
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