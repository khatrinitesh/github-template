import { Container, Col } from "react-bootstrap";
import "./Team.css";
import { getImage } from "../../utils/assets";

const Team = () => {
  return (
    <article id="team">
      <Container className="container">
        <div className="content">
          <h1 className="title">Meet the Team</h1>
          <div className="teamGrid">
            <Col xs={4} className="member">
              <img src={getImage("member1.png")} alt="Emma" />
              <h3 className="memberInfo">
                Emma Xia <br /> CEO, WTB Influencer <br /> bukiemma000@gmail.com
              </h3>
            </Col>
            <Col xs={4} className="member">
              <img src={getImage("member2.png")} alt="Manesh" />
              <h3 className="memberInfo">
                Manesh Jhawar <br /> CTO, Skydiver <br />{" "}
                manesh.jhawar@gmail.com
              </h3>
            </Col>
            <Col xs={4} className="member">
              <img src={getImage("member3.png")} alt="Nick" />
              <h3 className="memberInfo">
                Nick Zhang <br /> CTO, Nerdy kid <br /> nzhang.jiahui@gmail.com
              </h3>
            </Col>
          </div>
        </div>
      </Container>
    </article>
  );
};

export default Team;
