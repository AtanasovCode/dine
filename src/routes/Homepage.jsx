import Hero from "../components/homepage/sections/Hero";
import Description from "../components/homepage/sections/Description";
import Highlights from "../components/homepage/sections/Highlights";

const Homepage = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <Description />
            <Highlights />
        </div>
    );
}

export default Homepage;