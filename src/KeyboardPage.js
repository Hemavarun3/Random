import React, { useState } from 'react';

const KeyboardPage = () => {
  // List of two keys: 1 and 2
  const keys = ['1', '2'];

  // State to store the selected key
  const [selectedKey, setSelectedKey] = useState(null);

  // Function to handle button clicks
  const handleClick = (key) => {
    setSelectedKey(key);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Click to view my drawings!!</h1>
      
      {/* Display buttons for key 1 and 2 */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {keys.map((key, index) => (
          <button
            key={index}
            onClick={() => handleClick(key)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {key}
          </button>
        ))}
      </div>

      {/* Display image based on selected key */}
      {selectedKey && (
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-4">You clicked: {selectedKey}</h2>
          <img
            src={`/images/${selectedKey}.jpeg`} // path to your local image or online image
            alt={`Image for ${selectedKey}`}
            className="border rounded-lg object-cover w-60 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-80"
          />
        </div>
      )}
    </div>
  );
};

export default KeyboardPage;
