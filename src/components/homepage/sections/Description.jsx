import DescriptionComponent from '../reusable/DescriptionComponent';

//importing images
import enjoyablePlaceDesktop from '../../../assets/homepage/enjoyable-place-desktop.jpg';
import enjoyablePlaceDesktopx2 from '../../../assets/homepage/enjoyable-place-desktop@2x.jpg';
import enjoyablePlaceTablet from '../../../assets/homepage/enjoyable-place-tablet.jpg';
import enjoyablePlaceTabletx2 from '../../../assets/homepage/enjoyable-place-tablet@2x.jpg';
import enjoyablePlaceMobile from '../../../assets/homepage/enjoyable-place-mobile.jpg';
import enjoyablePlaceMobilex2 from '../../../assets/homepage/enjoyable-place-mobile@2x.jpg';

import locallySourcedMobile from '../../../assets/homepage/locally-sourced-mobile.jpg';
import locallySourcedMobilex2 from '../../../assets/homepage/locally-sourced-mobile@2x.jpg';
import locallySourcedTablet from '../../../assets/homepage/locally-sourced-tablet.jpg';
import locallySourcedTabletx2 from '../../../assets/homepage/locally-sourced-tablet@2x.jpg';
import locallySourcedDesktop from '../../../assets/homepage/locally-sourced-desktop.jpg';
import locallySourcedDesktopx2 from '../../../assets/homepage/locally-sourced-desktop@2x.jpg';


const Description = () => {
    return (
        <div className="
            w-all flex flex-col items-center justify-center
        ">
            <DescriptionComponent 
                mobile={enjoyablePlaceMobile}
                mobilex2={enjoyablePlaceMobilex2}
                tablet={enjoyablePlaceTablet}
                tabletx2={enjoyablePlaceTabletx2}
                desktop={enjoyablePlaceDesktop}
                desktopx2={enjoyablePlaceDesktopx2}
                titleOne="Enjoyable place"
                titleTwo="for all the family"
                desc="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
            />

            <DescriptionComponent 
                mobile={locallySourcedMobile}
                mobilex2={locallySourcedMobilex2}
                tablet={locallySourcedTablet}
                tabletx2={locallySourcedTabletx2}
                desktop={locallySourcedDesktop}
                desktopx2={locallySourcedDesktopx2}
                titleOne="The most locally"
                titleTwo="sourced food"
                desc="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
            />
        </div>
    );
}

export default Description;