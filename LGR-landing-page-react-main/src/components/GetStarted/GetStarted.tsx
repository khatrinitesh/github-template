import { Container } from "react-bootstrap";
import "./GetStarted.css";
import { getImage } from "../../utils/assets";

const GetStarted = () => {
  return (
    <section id="getStarted">
      <img src={getImage("getStarted.png")} alt="none" className="startedImg" />
      <Container className="container">
        <div className="allText">
          <h1 className="title">
            Collaborate with anyone you want, however you want.
          </h1>
          <p className="info">
            LGR is an online creator marketplace that gives you the freedom to
            find collaborations opportunities, grow your brand and learn from
            others.
          </p>
          <button className="getStartedBtn">
            <strong>Get Started</strong> - It's free
          </button>
        </div>
      </Container>
    </section>
  );
};

export default GetStarted;
