import styled from "styled-components";
import { getImage } from "../../utils/assets";
import { Container } from "react-bootstrap";

const Opener = () => {
  return (
    <Main id="opener" bg={getImage("opener.png")}>
      <Container>
        <Heading>LGR</Heading>
      </Container>
    </Main>
  );
};

export default Opener;

const Main = styled.main<{ bg: string }>`
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  color: white;
`;

const Heading = styled.h1`
  font-size: clamp(8rem, 20vw, 14rem);
  text-transform: uppercase;
  font-weight: normal;
`;
