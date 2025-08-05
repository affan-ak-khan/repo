// src/App.jsx
import React from 'react';
import Work from './components/work'; // Import the Work component
import WorkShowcase from './components/WorkShowcase';
import './components/WorkShowcase.css';
import Brands from './components/Brands'; // Import the Brands component


function App() {
  return (
    <div className="App">
        <Work />
      {/* Render the Brands component */}
      {/* Render the WorkShowcase component */}
      <WorkShowcase />
      {/* Render the Work component */}
    
      <Brands />
    </div>
  );
}

export default App;
