import Hero from "../components/homepage/Hero";
import Description from "../components/homepage/Description";

const Homepage = () => {
    return (
        <div className="flex flex-col">
            <Hero />
            <Description />
        </div>
    );
}

export default Homepage;