import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.js';
import KeyboardPage from './KeyboardPage.js';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Route for Keyboard Page */}
        <Route path="/keyboard" element={<KeyboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
