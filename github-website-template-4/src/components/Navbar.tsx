import { useScrollStore } from "../store/useStore";

const links = ["home", "services", "menu", "reviews", "app", "map", "contact"];

const Navbar = () => {
  const { activeSection, setActiveSection } = useScrollStore();

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  };

  return (
    <nav className="flex gap-4">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleClick(link)}
          className={`capitalize hover:text-blue-500 ${
            activeSection === link ? "text-blue-500 font-bold" : ""
          }`}
        >
          {link}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
