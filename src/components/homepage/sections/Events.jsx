import { useState } from 'react';

import { Link } from 'react-router-dom';

import familyDesktop from '../../../assets/homepage/family-gathering-desktop.jpg';
import familyDesktopx2 from '../../../assets/homepage/family-gathering-desktop@2x.jpg';
import familyTablet from '../../../assets/homepage/family-gathering-tablet.jpg';
import familyTabletx2 from '../../../assets/homepage/family-gathering-tablet@2x.jpg';
import familyMobile from '../../../assets/homepage/family-gathering-mobile.jpg';
import familyMobilex2 from '../../../assets/homepage/family-gathering-mobile@2x.jpg';

import specialDesktop from '../../../assets/homepage/special-events-desktop.jpg';
import specialDesktopx2 from '../../../assets/homepage/special-events-desktop@2x.jpg';
import specialTablet from '../../../assets/homepage/special-events-tablet.jpg';
import specialTabletx2 from '../../../assets/homepage/special-events-tablet@2x.jpg';
import specialMobile from '../../../assets/homepage/special-events-mobile.jpg';
import specialMobilex2 from '../../../assets/homepage/special-events-mobile@2x.jpg';

import socialDesktop from '../../../assets/homepage/social-events-desktop.jpg';
import socialDesktopx2 from '../../../assets/homepage/social-events-desktop@2x.jpg';
import socialTablet from '../../../assets/homepage/social-events-tablet.jpg';
import socialTabletx2 from '../../../assets/homepage/social-events-tablet@2x.jpg';
import socialMobile from '../../../assets/homepage/social-events-mobile.jpg';
import socialMobilex2 from '../../../assets/homepage/social-events-mobile@2x.jpg';

const Events = () => {


    const [selectedEvent, setSelectedEvent] = useState("family");
    const [events, setEvents] = useState({
        family: {
            name: "Family Gathering",
            description: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
            image: {
                desktop: familyDesktop,
                desktopx2: familyDesktopx2,
                tablet: familyTablet,
                tabletx2: familyTabletx2,
                mobile: familyMobile,
                mobilex2: familyMobilex2
            }
        },
        special: {
            name: "Special Events",
            description: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
            image: {
                desktop: specialDesktop,
                desktopx2: specialDesktopx2,
                tablet: specialTablet,
                tabletx2: specialTabletx2,
                mobile: specialMobile,
                mobilex2: specialMobilex2
            }
        },
        social: {
            name: "Social Events",
            description: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
            image: {
                desktop: socialDesktop,
                desktopx2: socialDesktopx2,
                tablet: socialTablet,
                tabletx2: socialTabletx2,
                mobile: socialMobile,
                mobilex2: socialMobilex2
            }
        },
    });

    const event = events[selectedEvent];

    return (
        <div className="
            flex flex-col items-center justify-center py-16 w-full
            lg:flex-row lg:p-16 lg:min-h-[100vh]
        ">
            <picture className="flex-1 flex items-center justify-center">
                {/* Mobile */}
                <source
                    media="(max-width: 600px)"
                    srcSet={`${event.image.mobile} 1x, ${event.image.mobilex2} 2x`}
                />
                {/* Tablet */}
                <source
                    media="(max-width: 1200px)"
                    srcSet={`${event.image.tablet} 1x, ${event.image.tabletx2} 2x`}
                />
                {/* Desktop */}
                <img
                    srcSet={`${event.image.desktop} 1x, ${event.image.desktopx2} 2x`}
                    alt={`picture of ${event.name}`}
                    className="shadow-picture-sm lg:shadow-picture"
                />
            </picture>

            <div className="
                flex-1 flex flex-col items-center justify-center
                lg:flex-col-reverse lg:items-start lg:ml-16
            ">
                <div className="
                    flex flex-col items-start justify-center uppercase font-semibold text-lg mt-12
                ">
                    <div
                        onClick={() => setSelectedEvent("family")}
                        className={`cursor-pointer hover:font-semibold ${selectedEvent === "family" ? "font-bold opacity-100" : "font-normal opacity-70"}`}
                    >
                        Family Gathering
                    </div>
                    <div
                        className={`cursor-pointer my-4 hover:font-semibold ${selectedEvent === "special" ? "font-bold opacity-100" : "font-normal opacity-70"}`}
                        onClick={() => setSelectedEvent("special")}>
                        Special Events
                    </div>
                    <div
                        onClick={() => setSelectedEvent("social")}
                        className={`cursor-pointer hover:font-semibold ${selectedEvent === "social" ? "font-bold opacity-100" : "font-normal opacity-70"}`}
                    >
                        Social Events
                    </div>
                </div>

                <div className="
                    flex flex-col items-center justify-center mt-8 px-6
                    lg:mt-0 lg:px-0 lg:items-start
                ">
                    <div className="text-3xl font-bold mb-8 md:text-5xl">
                        {event.name}
                    </div>
                    <div className="
                        text-center sm:text-xl sm:mx-12 md:max-w-[60%]
                        lg:mx-0 lg:text-left
                    ">
                        {event.description}
                    </div>
                    <div className="mt-12">
                        <Link
                            to="/booking"
                            className="
                                py-5 px-16 uppercase bg-cod-gray text-white cursor-pointer 
                                mt-8 font-semibold tracking-widest
                                hover:bg-transparent hover:border-2 hover:border-solid hover:border-black hover:text-black
                            "
                        >
                            Book a table
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;
