import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tabslogin from "./Tabslogin";
import "./ModalLogin.css"

function ModalLogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span variant="primary" onClick={handleShow}>
        Login
      </span>
      <>
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Body>
            <div className="tabs-login-container" >
              <Tabslogin />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </>
    </>
  );
}

export default ModalLogin;

