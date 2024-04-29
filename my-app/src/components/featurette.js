import React from 'react';
import { Link } from 'react-router-dom';
import choro1 from '../assets/images/choro1.jpg';
import villalobos1 from '../assets/images/villalobos1.jpg';
import me from '../assets/images/me.JPEG';
import cuban1 from '../assets/images/cuban1.jpg';

const Featurette = () => {
  return (
    <div className="container">
      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 text-center d-flex flex-column justify-content-center">
          <h2 className="featurette-heading">Villa-Lobos. <span className="text-muted">Politics intertwined with Music.</span></h2>
          <p className="lead">
            <Link to="/villa-lobos" className="btn btn-primary">More Info</Link>
          </p>
        </div>
        <div className="col-md-5">
          <img src={villalobos1} alt="Villa-Lobos" className="featurette-image img-fluid mx-auto" />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 text-center d-flex flex-column justify-content-center order-md-2">
          <h2 className="featurette-heading">Brazilian Choro. <span className="text-muted">Chorinho do Rio de Janeiro</span></h2>
          <p className="lead">
            <Link to="/brazilian-choro" className="btn btn-primary">More Info</Link>
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img src={choro1} alt="Brazilian Choro" className="featurette-image img-fluid mx-auto" />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 text-center d-flex flex-column justify-content-center">
          <h2 className="featurette-heading">Cuban American. <span className="text-muted">Yearning for the Hearth</span></h2>
          <p className="lead">
            <Link to="/cuban-american" className="btn btn-primary">More Info</Link>
          </p>
        </div>
        <div className="col-md-5">
          <img src={cuban1} alt="Cuban Poster" className="featurette-image img-fluid mx-auto" />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 text-center d-flex flex-column justify-content-center order-md-2">
          <h2 className="featurette-heading">Me. <span className="text-muted">Just a Guitarist</span></h2>
          <p className="lead">
            <Link to="/performances" className="btn btn-primary">Recordings</Link>
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <img src={me} alt="me" className="featurette-image img-fluid mx-auto" />
        </div>
      </div>

      <hr className="featurette-divider" />

    </div>
  );
};

export default Featurette;
