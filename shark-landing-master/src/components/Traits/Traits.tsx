import { Container } from "react-bootstrap";
import { getImage } from "../../utils/assets";
import "./Traits.css";

const Traits = () => {
  return (
    <section id="traits">
      <Container fluid>
        <div className="content">
          <div className="grid-section">
            <div className="text">
              <h5 className="title">Trait rarity</h5>
              <h3 className="subtitle">Each Rogue Shark is unique</h3>
              <p className="desc">
                We test, retest, and test again, so your windows and doors work
                every day, day after day. Homeowners, contractors, builders and
                architects agree Durabuilt products rate #1 in quality.
              </p>
              <button className="btn btn-trait">
                <div>Discover traits</div>
              </button>
            </div>
            <img src={getImage("traitsGridImg.png")} alt="img grid" />
          </div>
          <img src={getImage("gun.png")} alt="not found" className="gunImg" />
        </div>
      </Container>
    </section>
  );
};

export default Traits;
