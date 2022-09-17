import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modalPostReview.css'
import { postReviews } from '../../redux/actions/reviews'

import { FaStar } from 'react-icons/fa'
import "./starRating.css"

const ModalPostReview = (data) => {
  // const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)


  const [show, setShow] = useState(false);

  const [input, setInput] = useState({
    rating: null,
    description: '',
    ComicId: data.data.volume_id,
    UserId: localStorage.getItem("user"),
    IssueId: data.data.id,
  })

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  // function handleCheck() {
  //   setInput({

  //   })
  // }

  function sendReview() {
    console.log(input)
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button className="btn-PostReviews" variant="primary" onClick={handleShow}>
        Post Review
      </Button>

      <Modal className='modalPost' size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post a your Comic Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='contPost'>
            <div className='star'>
              {[...Array(5)].map((star, i) => {
                let ratingValue = i + 1
                return (
                  <label key={i}>
                    <input
                      type="checkbox"
                      name="rating"
                      value={ratingValue}
                      onClick={(e) => handleChange(e)}
                    />
                    <FaStar
                      className='starPost'
                      color={ratingValue <= (hover || input.rating) ? "#ffc107" : "#e4e5e9"}
                      size={40}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                )
              })}
            </div>
            <textarea name='description' onChange={(e) => handleChange(e)} className="description" cols="50" rows="10" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={sendReview}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPostReview