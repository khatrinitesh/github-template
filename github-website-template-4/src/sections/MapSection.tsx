import { useEffect, useRef } from "react";
import gsap from "gsap";

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(mapRef.current, { opacity: 0, y: 100, duration: 1 });
  }, []);
  return (
    <section id="map" className="py-20 bg-gray-50">
      <div ref={mapRef} className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Find Us Here</h2>
        <div className="w-full h-96 rounded overflow-hidden shadow-lg">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.123456789!2d72.831061!3d18.938934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c123456789%3A0xabcdef123456789!2sMumbai!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
