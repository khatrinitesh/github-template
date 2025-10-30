import { getImage } from "../../utils/assets";
import { useSidebarStore } from "../../store/useSidebarStore";
import "./Sidebar.css";

interface SidebarProps {
  toggleChange: () => void;
}

const Sidebar = ({ toggleChange }: SidebarProps) => {
  // Using Zustand for sidebar state
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();
  // Determine the image for the toggle button based on state
  const toggleImage = isSidebarOpen ? "closeburger.png" : "openburger.png";
  return (
    <article className="sidebar">
      <div className="content">
        <div className="top-section">
          <button className="btn btn-connect">Mint a Shark</button>
          <img
            src={getImage(toggleImage)}
            alt="toggle"
            onClick={toggleSidebar}
            className="toggleBtn"
          />
        </div>

        <div className="links">
          <a className="link" onClick={toggleSidebar} href="#overview">
            <h2>Overview</h2>
            <img src={getImage("arrowRight.png")} alt="arrow" />
          </a>
          <a className="link" onClick={toggleSidebar} href="#roadmap">
            <h2>Roadmap & Utility</h2>
            <img src={getImage("arrowRight.png")} alt="arrow" />
          </a>
          <a className="link" onClick={toggleSidebar} href="#traits">
            <h2>Trait Rarity</h2>
            <img src={getImage("arrowRight.png")} alt="arrow" />
          </a>
          <a className="link" onClick={toggleSidebar} href="#faq">
            <h2>FAQs</h2>
            <img src={getImage("arrowRight.png")} alt="arrow" />
          </a>
        </div>

        <div className="mid-text">
          <p>Join the Rogue Shark Community</p>
          <p className="bigtext">
            An adventure to Lake Baikal, the deepest lake on earth, with
            temperatures as low as -40°C.
          </p>
        </div>

        <div className="footer-btns">
          <button className="btn btn-connect">Join Discord</button>
          <button className="btn btn-mint">Follow Twitter</button>
        </div>
      </div>
    </article>
  );
};

export default Sidebar;
