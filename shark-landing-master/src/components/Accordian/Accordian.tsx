import { Accordion } from "react-bootstrap";
import { useThemeStore } from "../../store/useThemeStore/useThemeStore.ts";
import type { AccordionItem } from "../../interface/index.ts";
import {
  DARK_THEME_ITEMS,
  WHITE_THEME_ITEMS,
} from "../../constants/accordionData";
import "./Accordian.css";

const Accordian = () => {
  const { theme, toggleTheme } = useThemeStore();
  const items: AccordionItem[] = theme ? WHITE_THEME_ITEMS : DARK_THEME_ITEMS;

  return (
    <div className="faq-container">
      <button className="theme-btn" onClick={toggleTheme}>
        Toggle Theme
      </button>

      <Accordion defaultActiveKey="0" flush>
        {items.map(({ id, header, body }) => (
          <Accordion.Item
            eventKey={id}
            key={id}
            className={`faq-accordion-item ${theme ? "white-body" : ""}`}
          >
            <Accordion.Header>{header}</Accordion.Header>
            <Accordion.Body>{body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Accordian;
