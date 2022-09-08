import React, { useState } from 'react';
import { useSelector } from "react-redux";
import ModalInfoIssue from './ModalInfo';

import Card from 'react-bootstrap/Card';
import "./CardIssue.css"

function CardIssue({ data }) {
  const theme_params = useSelector((state) => state.theme_params);
  const { theme } = theme_params
  const [showModal, setShowModal] = useState(false)
  const { image } = data

  const handleModal = () => {
    setShowModal(() => !showModal)
  }

  return (
    <>
      <Card className='ms-5 card-issue' style={{ width: '8rem', height: '1rem' }} onClick={handleModal}>
        <Card.Img src={image} />
        <ModalInfoIssue open={showModal} data={data} theme={theme} />
      </Card>
    </>
  );
}

export default CardIssue;