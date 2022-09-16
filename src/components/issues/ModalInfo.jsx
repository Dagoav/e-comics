import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ShoppingBar from '../shopping-bar/ShoppingBar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import StarRating from "../starRating/starRating.jsx";

import "./ModalInfo.css"

const ModalInfoIssue = ({ open, data, theme }) => {
  const [show, setShow] = useState(false);
  const { image, name, issue_number, price, description, Ratings, id, volume_id } = data

  useEffect(() => {
    if (open) {
      setShow(() => true);
    }
  }, [open])


  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const rol = JSON.parse(localStorage.getItem("ROL"))

  console.log(`id: ${id} comicId: ${volume_id}`)

  const promRating = () => {
    var prom = Ratings.reduce((sum, value) => (typeof value.rating == "number" ? sum + value.rating : sum), 0)
    return Math.ceil((prom / Ratings.length))
  }
  return (
    <>
      <Modal show={show} onHide={handleClose} size='md' >
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
        <StarRating value={promRating()} />
        <Modal.Footer className='pe-5'>
          <ShoppingBar price={price} comic={data} />
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Link to={"/shop"}> */}
          <Link to={rol === "USER" ? '/user/shop' : '/login'}>
            <Button variant="danger" onClick={handleClose}>
              ir a carrito
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalInfoIssue