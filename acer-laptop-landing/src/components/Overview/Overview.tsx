import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdge } from "@fortawesome/free-brands-svg-icons"; // or faCode / faMicrochip
import { getImage } from "../../utils/assets";
import Container from "../Container/Container";
import FindMore from "../FindMore/FindMore";
import "./Overview.css";

const Overview = () => {
  return (
    <section className="overview">
      <Container type="smallest">
        <div className="content">
          <img src={getImage("overview.png")} alt="No image found" />
          <div className="right">
            {/* Replace RiEdgeLine with Font Awesome icon */}
            <FontAwesomeIcon icon={faEdge} size="lg" />

            <h3 className="title">
              Introducing <br />
              latest acer
              <br /> nitro 5 graphics
            </h3>
            <p className="secondary-text">
              Feel the new world <br /> of gaming development
            </p>
            <FindMore text="Find out more" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Overview;
