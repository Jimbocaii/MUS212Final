// src/components/marketing.js
import React from 'react';
import funfact1 from '../assets/images/funfact1.jpg';
import funfact2 from '../assets/images/funfact2.png';
import funfact3 from '../assets/images/funfact3.png';
const marketing = () => {
  return (
    <div className="container marketing">
      <div className="row">
        <div className="col-lg-4">
          <div className="rounded-circle" style={{ backgroundImage: `url(${funfact1})` }}></div>
          <div className="rounded-text">
            <h2>Fun Fact</h2>
            <p><a className="btn btn-secondary" href="#" role="button">Click here &raquo;</a></p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="rounded-circle" style={{ backgroundImage: `url(${funfact2})` }}></div>
          <div className="rounded-text">
            <h2>Another One</h2>
            <p><a className="btn btn-secondary" href="#" role="button">Click again &raquo;</a></p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="rounded-circle" style={{ backgroundImage: `url(${funfact3})` }}></div>
          <div className="rounded-text">
            <h2>ANOTHER ONE</h2>
            <p><a className="btn btn-secondary" href="#" role="button">CLICK AGAIN &raquo;</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default marketing;
