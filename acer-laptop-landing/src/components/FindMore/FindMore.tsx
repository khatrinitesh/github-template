import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { ReactNode } from "react";
import "./FindMore.css";

type Props = {
  text: ReactNode;
};

const FindMore = ({ text }: Props) => {
  return (
    <button className="findMore">
      <div className="text">{text}</div>
      <FontAwesomeIcon icon={faArrowRight} /> {/* Arrow Right Icon */}
    </button>
  );
};

export default FindMore;
