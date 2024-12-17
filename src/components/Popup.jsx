import React, { useState } from 'react'
import './Popup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Popup(props) {

  return (
    <>
    <div className="wrapper" onClick={()=>props.trigger(false)}></div>
    <div
      className="modal show"
      style={{ display: 'block',position:"fixed",top:"25px"}} id="container"
    >
      <Modal.Dialog>
        <Modal.Header closeButton onClick={()=>props.trigger(false)}>
          <Modal.Title>Preview</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className='img-cover'>
          <img src={props.image} style={{position: "relative",width: "50%"}}/>
          </div>
        <br/>
        <br/>
        <p>{props.response}</p>
        <b><p>{props.contact}</p></b>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={props.action} >Extract</Button>
          
        </Modal.Footer>
      </Modal.Dialog>
    </div>

        </>
  )
}

export default Popup;
