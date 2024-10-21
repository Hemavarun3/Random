import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();  // Hook to navigate between routes

  const handleGetStartedClick = () => {
    navigate('/keyboard');  // Navigate to /keyboard page
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      {/* Text Section */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 text-center">
        Hello Everyone, I'm Tanuj
      </h1>

      {/* Button Section */}
      <button
        onClick={handleGetStartedClick}
        className="bg-blue-500 text-white py-3 px-8 rounded-lg text-lg md:text-xl hover:bg-blue-600 transition duration-300"
      >
        Let’s Get Started
      </button>
    </div>
  );
};

export default LandingPage;
