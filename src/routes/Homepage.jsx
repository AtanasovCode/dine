import Hero from "../components/homepage/Hero";
import Description from "../components/homepage/Description";
import Highlights from "../components/homepage/Highlights";

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