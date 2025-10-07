import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollUp from "./components/ScrollUp";
import AppSection from "./sections/AppSection";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import MapSection from "./sections/MapSection";
import Menu from "./sections/Menu";
import Reviews from "./sections/Reviews";
import Services from "./sections/Services";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main className="pt-20">
        <Home />
        <Services />
        <Reviews />
        <Menu />
        <AppSection />
        <MapSection />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
