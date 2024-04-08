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
        <div className="flex flex-col items-center justify-center min-w-full bg-cod-gray text-white
        px-6 py-24">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center text-2xl font-bold
                sm:text-5xl">
                    <div>A few highlights from</div>
                    <div>our menu</div>
                </div>
                <div className="mt-6 text-center xs:mx-16 sm:max-w-[70%] sm:text-xl">
                    We cater for all dietary requirements, but here’s a glimpse at 
                    some of our diner’s favourites. Our menu is revamped every season.
                </div>
            </div>

            <div>
                <HighlightComponent 
                    desktopTablet={salmonDesktopTablet}
                    desktopTabletx2={salmonDesktopTabletx2}
                    mobile={salmonMobile}
                    mobilex2={salmonMobilex2}
                    title="Seared Salmon Fillet"
                    desc="Our locally sourced salmon served 
                    with a refreshing buckwheat summer salad."
                />
            </div>
        </div>
    );
}

export default Highlights;