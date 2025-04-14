import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        'Find your <span style="color:rgb(255, 43, 123);">dream</span> job',
        'Join <span style="color:rgb(255, 43, 123);">top startups</span> today',
        'Your career starts <span style="color:rgb(255, 43, 123);">here</span>',
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px',
        height: '100vh',
        backgroundImage: 'url("https://prium.github.io/Posh/v2.0.0/assets/images/careers-header.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed', // 💡 This line makes the background sticky
        color: '#fff',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          transition: 'background-color 0.5s ease',
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div style={{ maxWidth: '800px', zIndex: 2 }}>
        <p
          style={{
            textTransform: 'uppercase',
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '1.5px',
            marginBottom: '1rem',
            marginTop: '100px',
          }}
        >
          Discover Opportunities
        </p>
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: '300',
            marginBottom: '1rem',
          }}
        >
          <span ref={typedElement}></span>
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
          }}
        >
          The easiest way to land your next tech job. Browse curated roles by top companies.
        </p>
        <button
          style={{
            backgroundColor: 'rgb(255, 43, 123)',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            fontWeight: '500',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Explore Jobs
        </button>
      </div>
    </section>
  );
};

export default Hero;
