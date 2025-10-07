import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full shadow-lg"
    >
      <FaArrowUp />
    </button>
  ) : null;
};

export default ScrollUp;
