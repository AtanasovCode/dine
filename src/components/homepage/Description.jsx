//importing images
import enjoyablePlaceDesktop from '../../assets/homepage/enjoyable-place-desktop.jpg';
import enjoyablePlaceDesktopx2 from '../../assets/homepage/enjoyable-place-desktop@2x.jpg';
import enjoyablePlaceTablet from '../../assets/homepage/enjoyable-place-tablet.jpg';
import enjoyablePlaceTabletx2 from '../../assets/homepage/enjoyable-place-tablet@2x.jpg';
import enjoyablePlaceMobile from '../../assets/homepage/enjoyable-place-mobile.jpg';
import enjoyablePlaceMobilex2 from '../../assets/homepage/enjoyable-place-mobile@2x.jpg';

const Description = () => {
    return (
        <div className="
            w-all flex flex-col px-4
        ">
            <div className="flex flex-col items-center justify-center w-all translate-y-[-20%] lg:translate-y-[-5%]">
                <picture>
                    {/*Mobile*/}
                    <source
                        media="(max-width: 600px)"
                        srcSet={`${enjoyablePlaceMobile} 1x, ${enjoyablePlaceMobilex2} 2x`}
                    />
                    {/*Tablet*/}
                    <source
                        media="(max-width: 1199px)"
                        srcSet={`${enjoyablePlaceTablet} 1x, ${enjoyablePlaceTabletx2} 2x`}
                    />
                    {/*Desktop*/}
                    <img
                        srcSet={`${enjoyablePlaceDesktop} x1, ${enjoyablePlaceDesktopx2} 2x`}
                        alt="image of the restaurant surrounded by trees and nature"
                        className="sm:w-[75vw] lg:w-auto"
                    />
                </picture>
            </div>
        </div>
    );
}

export default Description;