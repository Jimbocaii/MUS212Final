// src/components/featurette.js
import React from 'react';
import choro1 from '../assets/images/choro1.jpg';
import villalobos1 from '../assets/images/villalobos1.jpg';
import me from '../assets/images/me.JPEG';
import cuban1 from '../assets/images/cuban1.jpg';

const featurette = () => {
  return (
    <div className="container">
      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Villa-Lobos. <span className="text-muted">Politics intertwined with Music.</span></h2>
          <p className="lead">More Info</p>
        </div>
        <div className="col-md-5">
            <img src={villalobos1} alt="Villa-Lobos" className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '700px' }} />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Brazilian Choro. <span className="text-muted">Chorinho do Rio de Janeiro</span></h2>
          <p className="lead">More Info</p>
        </div>
        <div className="col-md-5 order-md-1">
            <img src={choro1} alt="Brazilian Choro" className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '700px' }} />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Cuban American. <span className="text-muted">Yearning for the Hearth</span></h2>
          <p className="lead">More Info</p>
        </div>
        <div className="col-md-5">
            <img src={cuban1} alt="Cuban Poster" className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '600px' }} />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Me. <span className="text-muted">Just a Guitarist</span></h2>
          <p className="lead">Recordings</p>
        </div>
        <div className="col-md-5 order-md-1">
            <img src={me} alt="me" className="featurette-image img-fluid mx-auto" style={{ width: '500px', height: '700px' }} />
        </div>
      </div>

      <hr className="featurette-divider" />

    </div>
  );
};

export default featurette;
