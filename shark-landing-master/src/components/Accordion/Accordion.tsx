import { DARK_FAQ_ITEMS, LIGHT_FAQ_ITEMS } from "../../constants/constants";
import { Accordion as RBAccordion } from "react-bootstrap";
import { useThemeStore } from "../../store/themeStore";
import "./Accordion.css";

const Accordion = () => {
  const { theme, toggleTheme } = useThemeStore(); // Use Zustand to get the current theme and toggle function

  // Decide which FAQ items to display based on the current theme
  const items = theme ? DARK_FAQ_ITEMS : LIGHT_FAQ_ITEMS;
  return (
    <>
      {/* Toggle Button */}
      <button onClick={toggleTheme}>
        Switch to {theme ? "Light" : "Dark"} Theme
      </button>

      {/* Accordion */}
      <RBAccordion defaultActiveKey="0" flush>
        {items.map((item) => (
          <RBAccordion.Item
            key={item.id}
            eventKey={String(item.id)}
            className={theme ? "faq-accordian-item" : ""}
          >
            <RBAccordion.Header>{item.title}</RBAccordion.Header>
            <RBAccordion.Body className={theme ? "white-body" : ""}>
              {item.body}
            </RBAccordion.Body>
          </RBAccordion.Item>
        ))}
      </RBAccordion>
    </>
  );
};

export default Accordion;
