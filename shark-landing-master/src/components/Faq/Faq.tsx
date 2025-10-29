import { Accordion, Container } from "react-bootstrap";
import { FAQ_CONTENT } from "../../constants/faqData";
import { useFaqStore } from "../../store/useFaqStore/useFaqStore";

const Faq = () => {
  const { activeKey, setActiveKey, theme } = useFaqStore();

  const handleToggle = (key: string) => {
    setActiveKey(activeKey === key ? null : key);
  };
  return (
    <section id="faq">
      <Container>
        <div className="content">
          <h4 className="sm-title">{FAQ_CONTENT.smallTitle}</h4>
          <div className="top-text">
            <h1 className="lg-title">{FAQ_CONTENT.largeTitle}</h1>
            <h2 className="desc">{FAQ_CONTENT.description}</h2>
          </div>
        </div>
      </Container>

      <div className="customContainer">
        <Accordion activeKey={activeKey ?? ""} flush>
          {FAQ_CONTENT.faqs.map((faq) => (
            <Accordion.Item
              key={faq.id}
              eventKey={faq.id}
              className={`faq-item ${theme === "dark" ? "dark" : "light"}`}
            >
              <Accordion.Header onClick={() => handleToggle(faq.id)}>
                {faq.question}
              </Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
