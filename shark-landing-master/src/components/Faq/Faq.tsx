import { Container } from "react-bootstrap";
import { useThemeStore } from "../../store/themeStore";
import Accordion from "../Accordion/Accordion";

const Faq = () => {
  // Get the current theme and toggle function from Zustand store
  const { theme, toggleTheme } = useThemeStore();
  return (
    // Sharing the same styles as ROADMAP component
    <>
      <section id="faq">
        <Container>
          <div className="content">
            <h4 className="sm-title">Faq & Utility</h4>
            <div className="top-text">
              <h1 className="lg-title">Here’s what to know</h1>
              <h2 className="desc">
                FPO. We can use this section to build confidence and trust by
                displaying partner and award logos paired with a strong case
                study video of a commercial or residential project.
              </h2>
            </div>
          </div>
        </Container>
        <div className="customContainer">
          <button onClick={toggleTheme}>
            Switch to {theme ? "Light" : "Dark"} Theme
          </button>
          {/* Pass the theme dynamically */}
          {/* @ts-ignore */}
          <Accordion theme={theme} />
        </div>
      </section>
    </>
  );
};

export default Faq;
