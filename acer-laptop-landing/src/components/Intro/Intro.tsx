import { RiEdgeLine } from "react-icons/ri";
import { getImage } from "../../utils/assets";
import "./Intro.css";

const Intro = () => {
  return (
    <section className="intro">
      <div className="bgImage">
        <div className="content">
          <img src={getImage("topmost.png")} alt="Not found" />
          <RiEdgeLine />
          <h4>Gaming Laptop</h4>
          <p className="secondary-text">
            Lorem ipsum dolor sit amet consectetur
            <br /> adipisicing elit. Voluptatibus, fugit?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
