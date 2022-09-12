import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import "./UserCard.css"

const UserCard = ({ data }) => {
  console.log(data);
  const { email, rol } = data

  return (
    <div>
      <Card className='user-card'>
        <Row className='border-bottom'>
          <Col md={4} className="col-item">
            <span>
              Email
            </span>
          </Col >
          <Col md={4} className="col-item">
            <span >
              Rol
            </span>
          </Col>
          <Col md={4} className="col-item">
            <span >
              User
            </span>
          </Col>
        </Row>

        <Row className='mt-2'>
          <Col md={4} className="col-item">
            <span>
              {email}
            </span>
          </Col >
          <Col md={4} className="col-item">
            <span>
              {rol}
            </span>
          </Col>
          <Col md={4} className="col-item">
            <span>
              Name
            </span>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default UserCard;