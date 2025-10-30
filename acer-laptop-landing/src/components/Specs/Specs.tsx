import Container from "../Container/Container";
import RedLine from "../RedLine/RedLine";
import { getImage } from "./../../utils/assets";

const Specs = () => {
  return (
    <section className="specs">
      <Container>
        <div className="content">
          <div className="col-1">
            <RedLine type="small" />
            <h2 className="title">
              Pure Gaming
              <br /> experience with better
              <br /> graphics quality
            </h2>
            <ul className="dashed secondary-text">
              <li>Modern Intel Core-i9 Processor</li>
              <li>Graphics Nividea GeForce RTX</li>
              <li>Multiprocessing threads execution</li>
            </ul>
            <button className="moreInfo">
              <a href="#">
                More info
                <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </button>
            <div className="spec_image">
              <img src={getImage("midsection1")} alt="Specifications" />
              <p className="caption">
                Red Dead Redemption 2 is a 2018 action-adventure game
                <br /> developed and published by Rockstar Games.{" "}
              </p>
            </div>
          </div>
          <div className="col-2">
            <div className="spec_image">
              <img src={getImage("midsection3")} alt="Specifications" />
              <p className="caption">
                Offering a plenty of software management techniques
                <br /> developed and published by Rockstar Games.{" "}
              </p>
            </div>
            <div className="spec_image">
              <img src={getImage("midsection2")} alt="Specifications" />
              <p className="caption">
                Take your gaming experience to the next level
                <br /> with hard core cooling process and threads.{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Specs;
