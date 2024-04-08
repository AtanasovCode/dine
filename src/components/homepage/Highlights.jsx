import HighlightComponent from "./HighlightComponent";

//Importing Images
//First Image
import salmonDesktopTablet from '../../assets/homepage/salmon-desktop-tablet.jpg';
import salmonDesktopTabletx2 from '../../assets/homepage/salmon-desktop-tablet@2x.jpg';
import salmonMobile from '../../assets/homepage/salmon-mobile.jpg';
import salmonMobilex2 from '../../assets/homepage/salmon-mobile@2x.jpg';
//Second Image
import beefDesktopTablet from '../../assets/homepage/beef-desktop-tablet.jpg';
import beefDesktopTabletx2 from '../../assets/homepage/beef-desktop-tablet@2x.jpg';
import beefMobile from '../../assets/homepage/beef-mobile.jpg';
import beefMobilex2 from '../../assets/homepage/beef-mobile@2x.jpg';
//Third Image
import chocolateDesktopTablet from '../../assets/homepage/chocolate-desktop-tablet.jpg';
import chocolateDesktopTabletx2 from '../../assets/homepage/chocolate-desktop-tablet@2x.jpg';
import chocolateMobile from '../../assets/homepage/chocolate-mobile.jpg';
import chocolateMobilex2 from '../../assets/homepage/chocolate-mobile@2x.jpg';


const Highlights = () => {
    return (
        <div className="
            flex flex-col items-center justify-center min-w-full bg-cod-gray text-white
            px-6 py-24 xs:px-12 sm:px-16
            lg:flex-row lg:items-stretch lg:py-48 lg:px-24
        ">
            <div className="
                flex flex-col items-center justify-center
                lg:h-full lg:justify-start lg:mr-8
            ">
                <div className="
                    flex flex-col items-center justify-center text-2xl font-bold
                    sm:text-5xl lg:w-full lg:items-start
                ">
                    <div>A few highlights from</div>
                    <div>our menu</div>
                </div>
                <div className="
                    mt-6 text-center 
                    sm:text-xl md:max-w-[65%] lg:max-w-full lg:text-left
                ">
                    We cater for all dietary requirements, but here’s a glimpse at
                    some of our diner’s favourites. Our menu is revamped every season.
                </div>
            </div>

            <div className="
                w-full flex flex-col items-center justify-center mt-24 
                lg:mt-0 lg:justify-start
            ">
                <HighlightComponent
                    desktopTablet={salmonDesktopTablet}
                    desktopTabletx2={salmonDesktopTabletx2}
                    mobile={salmonMobile}
                    mobilex2={salmonMobilex2}
                    title="Seared Salmon Fillet"
                    desc="Our locally sourced salmon served 
                    with a refreshing buckwheat summer salad."
                    alt="image of a dish called seared salmon fillet"
                />
                <HighlightComponent
                    desktopTablet={beefDesktopTablet}
                    desktopTabletx2={beefDesktopTabletx2}
                    mobile={beefMobile}
                    mobilex2={beefMobilex2}
                    title="Rosemary Filet Mignon"
                    desc="Our prime beef served to your taste 
                    with a delicious choice of seasonal 
                    sides."
                    alt="image of a dish called rosemary filet mignon"
                />
                <HighlightComponent
                    desktopTablet={chocolateDesktopTablet}
                    desktopTabletx2={chocolateDesktopTabletx2}
                    mobile={chocolateMobile}
                    mobilex2={chocolateMobilex2}
                    title="Summer Fruit Chocolate Mousse"
                    desc="Creamy mousse combined with 
                    summer fruits and dark chocolate shavings."
                    alt="image of a fruit chocolate musse"
                />
            </div>
        </div>
    );
}

export default Highlights;