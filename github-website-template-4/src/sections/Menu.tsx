import { useRef, useEffect } from "react";
import gsap from "gsap";
import { menuItems } from "../constants/data";

const Menu = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(containerRef.current?.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Menu</h2>
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="mt-4 text-xl font-bold">{item.name}</h3>
              <p className="mt-2 text-gray-600">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
