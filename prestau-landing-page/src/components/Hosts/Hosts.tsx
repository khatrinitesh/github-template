import { Container } from "react-bootstrap";
import "./Hosts.scss";
import { getImage } from "../../utils/assets";

const Hosts = () => {
  return (
    <section id="hosts">
      <Container>
        <h2 className="title">About the Hosts</h2>
        <div className="persons">
          <div className="person">
            <div>
              <h5 className="name">John Kingsbury</h5>
              <p className="department">Sales director</p>
            </div>
            <img src={getImage("anton_tech.jpeg")} alt="John" />
          </div>
          <div className="person">
            <img src={getImage("anton_tech.jpeg")} alt="John" />
            <div>
              <h5 className="name">Anton berger</h5>
              <p className="department">Technical account manager</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hosts;
