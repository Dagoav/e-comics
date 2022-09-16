import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ShoppingBar from '../shopping-bar/ShoppingBar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./ModalInfo.css"

const ModalInfoIssue = ({ open, data, theme }) => {
  const [show, setShow] = useState(false);
  const { image, name, issue_number, price, description } = data

  useEffect(() => {
    if (open) {
      setShow(() => true);
    }
  }, [open])


  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const rol = JSON.parse(localStorage.getItem("ROL"))

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