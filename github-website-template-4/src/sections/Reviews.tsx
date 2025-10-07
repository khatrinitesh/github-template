import { useEffect, useRef } from "react";
import gsap from "gsap";
import { reviews } from "../constants/data";

const Reviews = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate each review card
    gsap.from(containerRef.current?.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);
  return (
    <section
      id="reviews"
      className="py-20 bg-gradient-to-r from-blue-50 to-blue-100"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h3 className="text-xl font-semibold">{review.name}</h3>
              </div>
              <p className="text-gray-600">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
