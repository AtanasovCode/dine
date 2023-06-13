import styled from "styled-components";
import location from '../assets/images/enjoyable-place-mobile.png';
import food from '../assets/images/local-food-mobile.png';

const Info = () => {
    return (
        <Container>
            <Section>
                <FirstImage
                    src={location}
                    alt="location image"
                />

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
            </Section>

            <Section>
                <SecondImage
                    src={food}
                    alt="location image"
                />

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
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 5;
    margin-bottom: 120px;
`;

const Image = styled.img`
    margin-bottom: 40px;
`;

const FirstImage = styled(Image)`
    margin-top: -20%;
`;

const SecondImage = styled(Image)`
    margin-top: 0;
`;


const Title = styled.div`
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    text-align: center;
    margin-bottom: 20px;
`;

const TitleSplit = styled.div``;

const Subtitle = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
`;