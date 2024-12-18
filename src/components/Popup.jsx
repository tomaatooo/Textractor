import React, { useState } from 'react'
import './Popup.css'
import Dropdown from './Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Popup(props) {

  const [translated,setTranslated]=useState('');

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
        {translated==''?'':<p style={{backgroundColor:"#ADD8E6",padding:"4px"}}>{translated}</p>}
        
        </Modal.Body>

        <Modal.Footer>
          {props.response==''?<Button variant="primary"  onClick={props.action} >Extract</Button>:<Dropdown textToTranslate={props.response} translate={setTranslated}/>}
          
          
        </Modal.Footer>
      </Modal.Dialog>
    </div>

        </>
  )
}

export default Popup;
