import { useToggleStore } from "../../store/useToggleStore";
import { NAV_LINKS, SOCIAL_LINKS } from "../../constants/constants";
import Container from "../Container/Container";
import { getImage } from "../../utils/assets";
import {
  faUser,
  faShoppingCart,
  faSlidersH,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Brand.css";
import FindMore from "../FindMore/FindMore";

const Brand = () => {
  const { toggle, toggleMenu } = useToggleStore();
  return (
    <section className="brand">
      <div className="bgImage">
        <Container>
          <nav>
            <h1 className="logo">acer</h1>
            <ul className={`header-links ${toggle ? "header-links-show" : ""}`}>
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
            <div className="header-icons">
              <a href="#">
                <FontAwesomeIcon icon={faUser} /> {/* User Icon */}
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faShoppingCart} />{" "}
                {/* Shopping Cart Icon */}
              </a>
            </div>
            <div className="toggle" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faSlidersH} /> {/* Sliders Icon */}
            </div>
          </nav>

          <div className="content">
            <div className="col-1">
              <FontAwesomeIcon icon={faVideo} size="lg" /> {/* Video Icon */}
              <h1 className="title">
                Presenting <br /> Acer nitro 5
              </h1>
              <p className="description secondary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                rem. Iste aliquam cupiditate nulla sed alias quia, fuga ullam
                molestiae ea, laboriosam laborum doloribus non.
              </p>
              <FindMore text="Find out more" />
              <div className="trailer">
                <div className="left">
                  <h3 className="t_title">Trailer</h3>
                  <p className="t_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    laudantium architecto libero dignissimos provident odio
                    nihil unde modi blanditiis quisquam!
                  </p>
                </div>
                <div className="right">
                  <video width="300" controls preload="metadata">
                    <source
                      src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>

            <div className="col-2">
              <img src={getImage("brand_image.png")} alt="Acer" />
              <div className="social-links">
                {SOCIAL_LINKS.map((link) => (
                  <a href="#" key={link}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Brand;
