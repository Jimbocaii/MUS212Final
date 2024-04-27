// src/components/featurette.js
import React from 'react';
import choro1 from '../assets/images/choro1.jpg';
import villalobos1 from '../assets/images/villalobos1.jpg';

const featurette = () => {
  return (
    <div className="container">
      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Villa-Lobos. <span className="text-muted">Politics intertwined with Music.</span></h2>
          <p className="lead">--</p>
        </div>
        <div className="col-md-5">
            <img src={villalobos1} alt="Villa-Lobos" className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px' }} />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Brazilian Choro. <span className="text-muted">Chorinho do Rio de Janeiro</span></h2>
          <p className="lead">--</p>
        </div>
        <div className="col-md-5">
            <img src={choro1} alt="Brazilian Choro" className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px' }} />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Cuban American. <span className="text-muted">Yearning for the Hearth</span></h2>
          <p className="lead">--</p>
        </div>
        <div className="col-md-5 order-md-1">
          {/* Replace with an actual image or SVG */}
          <div className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', backgroundColor: '#eee' }}></div>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Me. <span className="text-muted">Just a Guitarist</span></h2>
          <p className="lead">--</p>
        </div>
        <div className="col-md-5">
          {/* Replace with an actual image or SVG */}
          <div className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', backgroundColor: '#eee' }}></div>
        </div>
      </div>

      <hr className="featurette-divider" />

    </div>
  );
};

export default featurette;
