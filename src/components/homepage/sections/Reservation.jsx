import desktop from '../../../assets/homepage/ready-bg-desktop.jpg';
import desktopx2 from '../../../assets/homepage/ready-bg-desktop@2x.jpg';
import tablet from '../../../assets/homepage/ready-bg-tablet.jpg';
import tabletx2 from '../../../assets/homepage/ready-bg-tablet@2x.jpg';
import mobile from '../../../assets/homepage/ready-bg-mobile.jpg';
import mobilex2 from '../../../assets/homepage/ready-bg-mobile@2x.jpg';

const Reservation = () => {
    return (
        <div className="
            flex items-center justify-center w-full relative
        ">
            <picture className="w-full h-full">
                {/*Mobile*/}
                <source 
                    media="(max-width: 600px)"
                    srcSet={`${mobile} 1x, ${mobilex2} 2x`}
                />
                {/*Tablet*/}
                <source 
                    media="(max-width: 1200px)"
                    ssrcSet={`${tablet} 1x, ${tabletx2} 2x`}
                />
                <img 
                    srcSet={`${desktop} 1x, ${desktopx2} 2x`}
                    alt="background image of a pizza"
                    className="w-full sm:h-[40vh] lg:h-auto"
                />
            </picture>

            <div className="
                absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center text-white
                lg:flex-row
            ">
                <div className="font-bold text-3xl mb-8 text-center lg:mr-16 lg:mb-0">
                    Ready to make a reservation?
                </div>
                <div className="flex items-center justify-center">
                    <input 
                        type="button"
                        value="Book a table"
                        className="px-12 py-5 bg-transparent border border-solid border-white text-white uppercase tracking-widest"
                    />
                </div>
            </div>
        </div>
    );
}

export default Reservation;