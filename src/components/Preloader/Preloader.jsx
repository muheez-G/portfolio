import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true); // FADE OUT only after reaching 100% and 500ms delay
          }, 500);
          return 100;
        }
      });
    }, 6); // speed (adjust if needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`preloader ${done ? 'fade-out' : ''}`}>
      <h1 className="preloader-title">
        <span className="highlight">Muheez</span><span className="highlight-dev">Dev</span>
      </h1>
      <p className="preloader-progress">{progress}%</p>
      <div className="preloader-bar">
        <div className="preloader-bar-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Preloader;
