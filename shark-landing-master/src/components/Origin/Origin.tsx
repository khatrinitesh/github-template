import { Container } from "react-bootstrap";
import { getImage } from "../../utils/assets";
import "./Origin.css";

const Origin = () => {
  return (
    <section id="origin">
      <Container>
        <div className="content">
          <div className="text">
            <h1 className="title">Our origin story</h1>
            <h3 className="desc">
              The Rogue Sharks origin story traces back to the early period of
              the Cold War, and one of our planet’s best kept secrets: Project
              Red Book.{" "}
            </h3>
          </div>
          <div className="image">
            <img src={getImage("banner.png")} alt="not found" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Origin;
