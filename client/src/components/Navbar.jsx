import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Collapse menu on mobile
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarToggler && navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 fixed-top">
      <div className="container">
        {/* Logo */}
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          style={{
            fontWeight: '600',
            color: '#1A1A40',
            fontSize: '1.5rem',
          }}
          onClick={() => scrollToSection('home')}
        >
          <img
            src="https://edu.novanectar.co.in/assets/nav-logo-BrPcRVjp.png"
            alt="Logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto" style={{ fontWeight: '500' }}>
            <li className="nav-item me-4">
              <Link
                className="nav-link text-dark custom-hover"
                to="/"
                style={{ fontWeight: 'bold' }}
                onClick={() => scrollToSection('home')}
              >
                Home
              </Link>
            </li>

            <li className="nav-item me-4">
              <Link
                className="nav-link text-dark custom-hover"
                to="/"
                style={{ fontWeight: 'bold' }}
                onClick={() => scrollToSection('about')}
              >
                About
              </Link>
            </li>

            <li className="nav-item me-4">
              <Link
                className="nav-link text-dark custom-hover"
                to="/"
                style={{ fontWeight: 'bold' }}
                onClick={() => scrollToSection('find-jobs')}
              >
                Find a Jobs
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link text-dark custom-hover"
                to="/"
                style={{ fontWeight: 'bold' }}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link
                className="nav-link text-dark custom-hover"
                to="/add-job"
                style={{ fontWeight: 'bold' }}
              >
                Add Job
              </Link>
            </li> */}
          </ul>

          {/* Buttons */}
          <div className="d-flex mt-3 mt-lg-0">
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
