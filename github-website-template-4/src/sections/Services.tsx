import { useEffect, useRef } from "react";
import { services } from "../constants/data";
import gsap from "gsap";

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(containerRef.current?.children, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
    });
  }, []);
  return (
    <section id="services" className="py-20 bg-gray-50">
      <divx
        ref={containerRef}
        className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {services.map((s) => (
          <div
            key={s.id}
            className="p-6 bg-white rounded shadow hover:scale-105 transition-transform text-center"
          >
            <div className="text-5xl">{s.icon}</div>
            <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
            <p className="mt-2">{s.description}</p>
          </div>
        ))}
      </divx>
    </section>
  );
};

export default Services;
