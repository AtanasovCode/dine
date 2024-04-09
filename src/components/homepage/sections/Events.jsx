import desktop from '../../../assets/homepage/family-gathering-desktop.jpg';
import desktopx2 from '../../../assets/homepage/family-gathering-desktop@2x.jpg';
import tablet from '../../../assets/homepage/family-gathering-tablet.jpg';
import tabletx2 from '../../../assets/homepage/family-gathering-tablet@2x.jpg';
import mobile from '../../../assets/homepage/family-gathering-mobile.jpg';
import mobilex2 from '../../../assets/homepage/family-gathering-mobile@2x.jpg';

const Events = () => {
    return (
        <div className="
            flex flex-col items-center justify-center py-16 w-full
            lg:flex-row lg:p-16 lg:min-h-[100vh]
        ">
            <picture className="flex-1 flex items-center justify-center">
                {/* Mobile */}
                <source
                    media="(max-width: 600px)"
                    srcSet={`${mobile} 1x, ${mobilex2} 2x`}
                />
                {/* Tablet */}
                <source
                    media="(max-width: 1200px)"
                    srcSet={`${tablet} 1x, ${tabletx2} 2x`}
                />
                {/* Desktop */}
                <img
                    srcSet={`${desktop} 1x, ${desktopx2} 2x`}
                    alt="picture of a table with a family sitting and dining"
                    className="shadow-picture-sm lg:shadow-picture"
                />
            </picture>

            <div className="
                flex-1 flex flex-col items-center justify-center
                lg:flex-col-reverse lg:items-start lg:ml-16
            ">
                <div className="flex flex-col mt-12">
                    <div className="flex flex-col items-center justify-center uppercase font-semibold text-lg">
                        <div>Family Gathering</div>
                        <div className="my-4 opacity-50">Special Events</div>
                        <div className="opacity-50">Social Events</div>
                    </div>
                </div>

                <div className="
                    flex flex-col items-center justify-center mt-8 px-6
                    lg:mt-0 lg:px-0 lg:items-start
                ">
                    <div className="text-3xl font-bold mb-8 md:text-5xl">
                        Family Gathering
                    </div>
                    <div className="
                        text-center sm:text-xl sm:mx-12 md:max-w-[60%]
                        lg:mx-0
                    ">
                        We love catering for entire families. So please bring
                        everyone along for a special meal with your loved ones.
                        We’ll provide a memorable experience for all.
                    </div>
                    <div>
                        <input
                            type="button"
                            value="book a table"
                            className="
                                py-5 px-16 uppercase bg-cod-gray text-white cursor-pointer 
                                mt-8 font-semibold tracking-widest
                                hover:bg-transparent hover:border-2 hover:border-solid hover:border-black hover:text-black
                            "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
