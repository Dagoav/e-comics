import React from 'react';
// import { useDispatch } from "react-redux";
import { Card, Col, Row } from 'react-bootstrap';
import "./UserCard.css"

const UserCard = ({ data }) => {
  // const dispatch = useDispatch();
  const { email, username, rol, active } = data
  const headers_users = ["Email", "Username", "Rol", "Active",]
  const data_users = [email, username, rol]

  const handleToggle = (e) => {
    let checkbox = e.target.checked;
    console.log(checkbox);
    // dispatch(setTheme(params))
  }

  return (
    <div>
      <Card className='user-card'>
        <Row className='border-bottom'>
          {
            headers_users?.map((header) => (
              <Col key={header} md={3} className="col-item">
                <span >
                  {header}
                </span>
              </Col >
            ))
          }
        </Row>

        <Row className='mt-2'>
          {
            data_users?.map(data => (
              <Col key={data} md={3} className="col-item">
                <span>
                  {data}
                </span>
              </Col >
            ))
          }
          <Col md={3} className="col-item">
            <label className="switch">
              <input type="checkbox" onChange={handleToggle} defaultChecked={active} />
              <span className="slider round"></span>
            </label>
          </Col >
        </Row>
      </Card>
    </div>
  );
};

export default UserCard;