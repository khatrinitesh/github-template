import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Home = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
    });
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-blue-100"
    >
      <h1 ref={titleRef} className="text-5xl font-bold">
        Welcome to My Website
      </h1>
    </section>
  );
};

export default Home;
