import { useEffect, useState } from "react";
import Opener from "../../components/Opener/Opener";
import Header from "../../components/Header/Header";
import GetStarted from "../../components/GetStarted/GetStarted";
import Importance from "../../components/Importance/Importance";
import Mission from "../../components/Mission/Mission";
import Footer from "../../components/Footer/Footer";
import Team from "../../components/Team/Team";
import AOS from "aos";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  return (
    <>
      {loading ? (
        <div>
          <Opener />
        </div>
      ) : (
        <main id="home">
          <Header />
          <GetStarted />
          <Importance />
          <Mission />
          <Team />
          <Footer />
        </main>
      )}
    </>
  );
};

export default HomePage;
