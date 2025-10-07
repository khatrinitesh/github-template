import { useThemeStore } from "../store/useStore";
import Navbar from "./Navbar";

const Header = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();
  return (
    <header
      className={`fixed w-full top-0 p-4 z-50 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } shadow`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">My Website</h1>
        <Navbar />
        <button
          onClick={toggleDarkMode}
          className="ml-4 px-3 py-1 border rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
