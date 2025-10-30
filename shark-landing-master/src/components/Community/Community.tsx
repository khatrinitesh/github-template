import { Container } from "react-bootstrap";
import { getImage } from "../../utils/assets";
import "./Community.css";

const Community = () => {
  return (
    <section id="community">
      <Container>
        <div className="content">
          <div className="grid-section">
            <img
              src={getImage("communityImg.png")}
              alt="Community grid representing the Rogue Shark project"
              className="community-img" // Optional: Add a class for CSS styling
            />
            <div className="text">
              <h1 className="title">Join the Rogue Shark Community</h1>
              <h2 className="desc">
                Join our Discord community to be the first to know when we go
                live…
              </h2>
              <div className="btns">
                <button className="btn btn-join">Mint a Shark</button>
                <button className="btn btn-follow">Connect Wallet</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Community;
