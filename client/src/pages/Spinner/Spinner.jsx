import React from 'react';
import './Spinner.scss'; // Importă fișierul CSS pentru stilizare

export default function Spinner() {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-row">
        <div className="skeleton-animation"></div>
      </div>
      <div className="skeleton-row">
        <div className="skeleton-animation"></div>
      </div>
      <div className="skeleton-row">
        <div className="skeleton-animation"></div>
      </div>
      <div className="skeleton-row">
        <div className="skeleton-animation"></div>
      </div>
      <div className="skeleton-row">
        <div className="skeleton-animation"></div>
      </div>
    </div>
  );
}
