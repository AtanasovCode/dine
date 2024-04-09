import Hero from "../components/homepage/sections/Hero";
import Description from "../components/homepage/sections/Description";
import Highlights from "../components/homepage/sections/Highlights";
import Events from "../components/homepage/sections/Events";
import Reservation from "../components/homepage/sections/Reservation";
import Footer from "../components/homepage/sections/Footer";

const Homepage = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <Description />
            <Highlights />
            <Events />
            <Reservation />
            <Footer />
        </div>
    );
}

export default Homepage;