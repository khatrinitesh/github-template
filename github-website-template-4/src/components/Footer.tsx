const Footer = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <p>&copy; {currentFullYear} My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
