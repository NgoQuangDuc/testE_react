import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Modals = (props) => {
 const{show,setShow,answer,count}=props
 const navigate = useNavigate();
    const handleClose = () => {setShow(false);
      navigate("/teams")
    }
  
  return (
    <> 
        <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton>
      <Modal.Title>Số câu đúng: {answer}/<span>{count}</span></Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Bạn gà quá đấy!!
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal></>
  )
}

export default Modals