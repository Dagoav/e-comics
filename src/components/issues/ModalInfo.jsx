import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import ShoppingBar from '../shopping-bar/ShoppingBar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import StarRating from "../starRating/starRating.jsx";
import ModalReviews from '../starRating/modalReviews';
import ModalPostReview from '../starRating/modalPostReview'
import { useDispatch, useSelector } from 'react-redux'

import "./ModalInfo.css"
import { getAvg } from '../../redux/actions/reviews';

const ModalInfoIssue = ({ open, data, theme }) => {
  const dispatch = useDispatch();
  let avg = useSelector(state => Math.round(state.reviews.avg.avgRating))
  const [show, setShow] = useState(false);
  const { image, name, issue_number, price, description } = data

  useEffect(() => {
    if (open) {
      setShow(() => true);
    }
  }, [open])

  console.log(avg)


  function getAverage(data) {
    console.log(data)
    const datitos = {
      volumeId: data.volume_id,
      IssueId: data.id
    }
    dispatch(getAvg(datitos))
  }

  const HandleClose = () => {
    setShow(false)
  };
  // const handleShow = () => setShow(true);
  const rol = JSON.parse(localStorage.getItem("ROL"))


  return (
    <>
      <Modal show={show} onHide={HandleClose} size='md' onEnter={() => getAverage(data)} >
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
        <StarRating key={data.id} value={avg} />
        <div className='contModals'>
          <ModalReviews data={data} />
          <ModalPostReview data={data} />
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
    </>
  );
}

export default ModalInfoIssue