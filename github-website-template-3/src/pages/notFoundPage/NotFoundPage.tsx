// src/pages/NotFoundPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../routes/path";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-700 mb-4">
        The page you are looking for doe s not exist.
      </p>
      <Link
        to={PATHS.HOME}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
