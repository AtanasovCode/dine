import styled from "styled-components";

import Hero from "../components/Hero";
import Info from "../components/Info";

const Homepage = () => {
    return (
        <Container>
            <Hero />
            <Info />
        </Container>
    );
}

export default Homepage;

const Container = styled.div``;