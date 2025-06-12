import React, { useState } from 'react';
import './App.css';
import StarField from './StarField';
import PageNavigator from './PageNavigator';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function App() {
  const [page, setPage] = useState(1); // Page state lifted here

  return (
    <div className="App">
      <div
        className="background-wrapper"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + '/tex4.jpg'})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Blur + Star Field */}
        <div className="blur-overlay">
          <StarField />
        </div>

        {/* Invisible Header - only on Page 1 and Page 5 */}
        {(page === 1 || page === 5) && (
          <div className="invisible-header">
            <div className="content1">
              <a
                href="https://www.facebook.com/share/19JEa9QW9a/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/re1th.reddi?igsh=MXRtbmZpczc2M3praQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>

              <a href="CV.pdf" download className="download-btn">
                Download CV
              </a>
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="hero">
  <div className="responsive-container">
    <PageNavigator page={page} setPage={setPage} />
  </div>
</div>

      </div>
    </div>
  );
}

export default App;
