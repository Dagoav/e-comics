import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./modalReviews.css"
import StarRating from './starRating';

const ModalReviews = (data) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-reviews" variant="primary" onClick={handleShow} width={50} >
        See Reviews
      </Button>

      <Modal className='modalReview' size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comic Review </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="contReviews">
            {data.data.Ratings.map((e, i) => {
              return (
                <div className='flex'>
                  <StarRating key={i} value={e.rating} />
                  <p>{e.description}</p>
                  <hr />
                </div>
              )
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default ModalReviews