// src/components/marketing.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import funfact1 from '../assets/images/funfact1.jpg';
import funfact2 from '../assets/images/funfact2.png';
import funfact3 from '../assets/images/funfact3.png';

const Marketing = () => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleClose = () => setShow(false);

  return (
    <div className="container marketing">
      <div className="row">
        <div className="col-lg-4">
          <div className="rounded-circle" style={{ backgroundImage: `url(${funfact1})` }}></div>
          <div className="rounded-text">
            <h2>Fun Fact</h2>
            <p>
              <Button className="btn-funFact" onClick={() => {
                setModalContent(<ul>
                  <li>Choro is considered the first characteristically Brazilian urban music. It predates other famous Brazilian music styles like samba and bossa nova.</li>
                  <li>The term "choro" comes from the Portuguese word for "cry" or "weep," but despite its somber name, choro is usually quite upbeat and happy in its rhythm and melody.</li>
                </ul>);
                setShow(true);
              }}>Click here &raquo;</Button>
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="rounded-circle" style={{ backgroundImage: `url(${funfact2})` }}></div>
          <div className="rounded-text">
            <h2>Another One</h2>
            <p>
              <Button className="btn-funFact" onClick={() => {
                setModalContent(<ul>
                  <li>Villa-Lobos is a prolific collector of Brazilian folk music. He traveled extensively throughout Brazil, gathering and recording thousands of traditional folk tunes, rhythms, and melodies from various regions of the country.</li>
                  <li>During his travels and performances in Europe, Villa-Lobos often ignored the formal attire typically expected of a classical composer and conductor. Instead, he preferred to wear more casual and comfortable clothing, sometimes even conducting orchestras in sandals and open shirts.</li>
                </ul>);
                setShow(true);
              }}>Click here &raquo;</Button>
            </p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="rounded-circle" style={{ backgroundImage: `url(${funfact3})` }}></div>
          <div className="rounded-text">
            <h2>ANOTHER ONE</h2>
            <p>
              <Button className="btn-funFact" onClick={() => {
                setModalContent(<ul>
                  <li>After the Cuban Revolution in 1959, a large number of Cubans immigrated to the United States, particularly to Miami. These immigrants brought with them not only their rich culture but also their vibrant music and dance styles such as salsa, mambo, and cha-cha-chá.</li>
                  <li>Ybor City, a historic neighborhood in Tampa, FL, became known as the "Cigar Capital of the World" in the late 19th and early 20th centuries, thanks in part to Cuban immigrants. These skilled artisans helped to establish and grow the cigar industry in the U.S., blending traditional Cuban techniques with new innovations.</li>
                </ul>);
                setShow(true);
              }}>Click here &raquo;</Button>
            </p>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Actually.... Here's a bunch of fun facts</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Marketing;
