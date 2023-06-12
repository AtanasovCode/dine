import styled from "styled-components";
import logo from '../assets/logo.svg';
import pizza from '../assets/images/pizza-transparent.png';

const Hero = () => {
    return (
        <Container>
            <HeroPic>
                <Pizza
                    src={pizza}
                    alt="pizza"
                />
            </HeroPic>

            <Info>
                <Logo
                    src={logo}
                    alt="logo"
                />

                <Title>
                    <Word>
                        Exquisite dining
                    </Word>
                    <Word>
                        since 1989
                    </Word>
                </Title>

                <Subtitle>
                    Experience our seasonal menu in beautiful
                    country surroundings. Eat the freshest
                    produce from the comfort of our farmhouse.
                </Subtitle>

                <Button 
                    type="button"
                    value="Book a table"
                />
            </Info>
        </Container>
    );
}

export default Hero;

const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    background-color: ${props => props.theme.codGray};
    color: #fff;
    font-family: ${props => props.theme.font}, "sans-serif";
`

const HeroPic = styled.div`
    width: 100%;
    min-height: 50vw;
    position: relative;
    overflow-x: hidden;
`;

const Pizza = styled.img`
    width: 140vw;
    position: absolute;
    top: -90%;
    left: -17%;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 15vw;
    z-index: 2;
`;

const Logo = styled.img`
    margin-bottom: 30px;
`;

const Title = styled.div`
    font-size: 32px;
    font-weight: 300;
    line-height: 40px;
    text-align: center;
    margin-bottom: 30px;
`;

const Word = styled.div``;

const Subtitle = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
    margin-bottom: 30px;
`;

const Button = styled.input`
    padding: 25px 40px;
    background-color: ${props => props.theme.codGray};
    color: #fff;
    border: 1px solid #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 2.5px;
`;