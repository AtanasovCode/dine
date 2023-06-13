import styled from "styled-components";
import logo from '../assets/logo.svg';
import pizza from '../assets/images/pizza-transparent.png';
import pizzaBG from '../assets/images/hero-bg-desktop.jpg';

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
    padding-bottom: 25vh;

    @media (min-width: 1024px) {
        flex-direction: row-reverse;
        align-items: center;
        justify-content: flex-start;
        padding-bottom: 0;
    }
`

const HeroPic = styled.div`
    width: 100%;
    min-height: 50vw;
    position: relative;
    overflow-x: hidden;

    @media (min-width: 1024px) {
        height: 100vh;
        flex: 100%;

        background-image: url(${pizzaBG});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: right;

        position: absolute;
        bottom: 0;
        right: 0;
    }
`;

const Pizza = styled.img`
    width: 90%;
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);

    animation: rotate 25s infinite linear;

    @keyframes rotate {
        from {
            transform: translateX(-50%) rotate(0);
        }
        to {
            transform: translateX(-50%) rotate(360deg);
        }
    }

    @media (min-width: 768px) {
        width: 80%;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 13vw;
    z-index: 2;

    @media (min-width: 768px) {
        margin-top: -16vh;
        flex: 100%;
    }

    @media (min-width: 1024px) {
        height: 100vh;
        margin-top: 0;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 10vh 12vw;
        padding-right: 0;
    }
`;

const Logo = styled.img`
    margin-bottom: 30px;

    @media (min-width: 1024px) {
        margin-bottom: 15vh;
    }
`;

const Title = styled.div`
    font-size: 32px;
    font-weight: 300;
    line-height: 40px;
    text-align: center;
    margin-bottom: 30px;

    @media (min-width: 768px) {
        font-size: 48px;
        line-height: 64px;
    }

    @media (min-width: 1024px) {
        font-size: 80px;
        line-height: 80px;
        text-align: left;
    }
`;

const Word = styled.div``;

const Subtitle = styled.div`
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
    margin-bottom: 50px;

    @media (min-width: 768px) {
        font-size: 20px;
        line-height: 30px;
        max-width: 573px;
    }

    @media (min-width: 1024px) {
        text-align: left;
        max-width: 445px;
    }
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
    transition: all .4s ease;

    &:hover {
        cursor: pointer;
        background-color: #fff;
        color: ${props => props.theme.codGray};
    }
`;