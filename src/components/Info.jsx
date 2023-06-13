import styled from "styled-components";

//Importing Images
import location from '../assets/images/enjoyable-place-mobile.png';
import locationTablet from '../assets/images/enjoyable-place-tablet.png';

import food from '../assets/images/local-food-mobile.png';
import foodTablet from '../assets/images/local-food-tablet.png';

const Info = () => {
    return (
        <Container>
            <Section 
                direction="row"
                first={true}
            >
                <FirstImage
                    src={location}
                    alt="location image"
                />

                <Heading>
                    <Title>
                        <TitleSplit>
                            Enjoyable place
                        </TitleSplit>
                        <TitleSplit>
                            for all the family
                        </TitleSplit>
                    </Title>

                    <Subtitle>
                        Our relaxed surroundings make dining
                        with us a great experience for everyone.
                        We can even arrange a tour of the farm before your meal.
                    </Subtitle>
                </Heading>
            </Section>

            <Section 
                direction="row-reverse"
                first={false}
            >
                <SecondImage
                    src={food}
                    alt="location image"
                />

                <Heading>
                    <Title>
                        <TitleSplit>
                            The most locally
                        </TitleSplit>
                        <TitleSplit>
                            sourced food
                        </TitleSplit>
                    </Title>

                    <Subtitle>
                        All our ingredients come directly
                        from our farm or local fishery.
                        So you can be sure that you’re
                        eating the freshest, most sustainable food.
                    </Subtitle>
                </Heading>
            </Section>
        </Container>
    );
}

export default Info;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 8vw;

    @media (min-width: 1024px) {
        padding: 0 12vw;
    }
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
    margin-bottom: 120px;

    @media (min-width: 1024px) {
        flex-direction: ${props => props.direction};
    }

    @media (min-width: 1024px) {
        width: 100%;
        justify-content: space-between;

        //Apply margin bottom to the first section
        margin-bottom: 0;
        margin-bottom: ${props => props.first && "120px"};
    }
`;

const Image = styled.div`
    margin-bottom: 40px;
    background-size: contain;
    background-position: center;
    background-position: center;
    aspect-ratio: 9/16;
    width: 327px;
    max-height: 400px;
    
    @media (min-width: 768px) {
        aspect-ration: none;
        width: 570px;
        max-height: 360px;
    }

    @media (min-width: 1024px) {
        width: 540px;
        max-height: 720px;
        margin-bottom: 0;
    }
`;

const FirstImage = styled(Image)`
    margin-top: -20%;
    background-image: url(${location});

    @media (min-width: 768px) {
        margin-top: -15%;
        background-image: url(${locationTablet});
    }

    @media (min-width: 1024px) {
        margin-top: -5%;
    }
`;

const SecondImage = styled(Image)`
    margin-top: 0;
    background-image: url(${food});

    @media (min-width: 768px) {
        background-image: url(${foodTablet});
    }
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1024px) {
        margin: 0;
        align-items: flex-start;
    }

`;

const Title = styled.div`
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    text-align: center;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        font-size: 48px;
        line-height: 48px;
    }

    @media (min-width: 1024px) {
        text-align: left;
        align-self: left;
    }
`;

const TitleSplit = styled.div``;

const Subtitle = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
    max-width: 327px;

    @media (min-width: 768px) {
        font-size: 20px;
        line-height: 30px;
        max-width: 457px;
    }

    @media (min-width: 1024px) {
        max-width: 445px;
    }
`;