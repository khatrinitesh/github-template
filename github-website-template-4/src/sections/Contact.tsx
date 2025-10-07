import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    gsap.from(formRef.current, { opacity: 0, y: 50, duration: 1 });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    formRef.current?.reset();
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto max-w-xl text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Send us a message and we’ll get back to you.
        </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            required
            className="p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={5}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-green-500 font-semibold">
            Message sent successfully!
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
