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
        <p>{props.waiting?<img style={{width:"20px"}} src="loading.gif"/>:props.response}</p>
        <p>{props.contact}</p>
        </Modal.Body>

        <Modal.Footer>{props.response===''?<Button variant="primary"  onClick={props.action} disabled={props.waiting}>Extract</Button>:''}
               
        </Modal.Footer>
      </Modal.Dialog>
    </div>

        </>
  )
}

export default Popup;
