import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons"; // simple line icon

type RedLineProps = {
  type?: string; // or a more specific type (see below)
};

const RedLine = ({ type }: RedLineProps) => {
  return (
    <FontAwesomeIcon
      icon={faMinus}
      size={type === "small" ? "sm" : "lg"}
      color="red"
    />
  );
};

export default RedLine;
