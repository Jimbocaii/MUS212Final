// src/components/marketing.js
import React from 'react';

const marketing = () => {
  return (
    <div className="container marketing">
      <div className="row">
        <div className="col-lg-4">
          <div className="rounded-circle" style={{ width: '140px', height: '140px', backgroundColor: '#777' }}></div>
          <h2>Heading</h2>
          <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div className="col-lg-4">
          <div className="rounded-circle" style={{ width: '140px', height: '140px', backgroundColor: '#777' }}></div>
          <h2>Heading</h2>
          <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
        <div className="col-lg-4">
          <div className="rounded-circle" style={{ width: '140px', height: '140px', backgroundColor: '#777' }}></div>
          <h2>Heading</h2>
          <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
          <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
        </div>
      </div>
    </div>
  );
};

export default marketing;