import { useEffect, useRef } from "react";
import gsap from "gsap";
import { appMockup } from "../constants/data";

const AppSection = () => {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(appRef.current, { opacity: 0, x: -100, duration: 1 });
  }, []);
  return (
    <section
      id="app"
      className="py-20 bg-gradient-to-r from-purple-50 to-purple-100"
    >
      <div
        ref={appRef}
        className="container mx-auto flex flex-col md:flex-row items-center gap-10"
      >
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4">Download Our App</h2>
          <p className="text-gray-700 mb-6">
            Experience our services on the go. Available for iOS and Android.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
              App Store
            </button>
            <button className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
              Google Play
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={appMockup}
            alt="App Mockup"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AppSection;
