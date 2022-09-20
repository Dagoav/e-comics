import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ShoppingBar from '../shopping-bar/ShoppingBar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import StarRating from "../starRating/starRating.jsx";
import ModalReviews from '../starRating/modalReviews';
import ModalPostReview from '../starRating/modalPostReview'

import "./ModalInfo.css"


const ModalInfoIssue = ({ open, data, theme }) => {
  const [show, setShow] = useState(false);
  const { image, name, issue_number, price, description, avgRating } = data

  useEffect(() => {
    if (open) {
      setShow(() => true);
    }
  }, [open])

  // const handleShow = () => setShow(true);
=======
  const handleClose = () => setShow(false);

  const rol = JSON.parse(localStorage.getItem("ROL"))

  let color = ""
  if (theme === "dark") {
    color = "modalDark"
  } else {
    color = "modalLight"
  }

  return (
    <Modal show={show} onHide={HandleClose} size='md' className={color}>
      <Modal.Header closeButton>
        <Modal.Title>
          <span className='px-1'>
            #{issue_number}
          </span>
        </Modal.Title>
        <span className='px-5 name-issue'>
          {name}
        </span>
      </Modal.Header>
      <Modal.Body>
        <p>
          {description || "Woohoo"}
        </p>
        <img className='ms-5 mt-3' style={{ width: '80%' }} src={image} alt="" />
      </Modal.Body>
      {
        avgRating ? <StarRating key={data.id} value={avgRating} /> : <h4 className='d-flex justify-content-center'>Not reviews for this comic</h4>
      }
      <div className='contModals'>
        <ModalReviews data={data} tema={color} />
        <ModalPostReview data={data} tema={color} />
      </div>
      <Modal.Footer className='pe-5'>
        <ShoppingBar price={price} comic={data} />
        <Button variant="secondary" onClick={HandleClose}>
          Close
        </Button>
        {/* <Link to={"/shop"}> */}
        <Link to={rol === "USER" ? '/user/shop' : '/login'}>
          <Button variant="danger" onClick={HandleClose}>
            ir a carrito
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalInfoIssue