import HeroBooking from "../components/booking/HeroBooking";
import Reserve from "../components/booking/Reserve";
import Footer from "../components/homepage/sections/Footer";

import { ScrollRestoration } from "react-router-dom";

const Booking = () => {
    return (
        <div>
            <ScrollRestoration /> {/*auto scroll to top on route change*/}
            <HeroBooking />
            <Reserve />
            <Footer />
        </div>
    );
}

export default Booking;