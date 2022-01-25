import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from './Landing';
import Shoes from './Shoes';
import DarkModeSwitch from './DarkModeSwitch';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <div className="h-20 fixed z-10 min-w-full bg-opacity-60 backdrop-filter backdrop-blur-lg flex items-center justify-end px-8 shadow-sm dark:shadow-md">
        <DarkModeSwitch setState={setDarkMode} />
      </div>
      <Routes>
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
