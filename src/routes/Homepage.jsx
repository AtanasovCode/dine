import Hero from "../components/homepage/sections/Hero";
import Description from "../components/homepage/sections/Description";
import Highlights from "../components/homepage/sections/Highlights";
import Family from "../components/homepage/sections/Family";

const Homepage = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <Description />
            <Highlights />
            <Family />
        </div>
    );
}

export default Homepage;