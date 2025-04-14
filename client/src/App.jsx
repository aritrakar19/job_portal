import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JobListings from './pages/JobListings';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import About from './pages/About';
// import FindJobs from './pages/FindJobs';
import Contact from './pages/Contact';
// import AddJob from './pages/AddJob';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/jobs" element={<JobListings />} />
        {/* <Route path="/add-job" element={<AddJob />} /> */}
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App; 