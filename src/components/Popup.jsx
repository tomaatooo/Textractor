import React, { useState } from 'react'
import './Popup.css'
import Dropdown from './Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Popup(props) {

  const [translated,setTranslated]=useState('');
  const [show,setShow]=useState('');
  const [loading,setLoading]=useState(false)



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
          <div className='img-cover' style={{display:`${show}`}}>
          <img src={props.image} style={{position: "relative",width: "50%"}}/>
          </div>
        <br/>
        <br/>
        <p>{props.waiting?<img style={{width:"20px"}} src="loading.gif"/>:props.response}</p>
        {loading?<img style={{width:"20px"}} src="loading.gif"/>:''}
        {translated==''?'':<p style={{backgroundColor:"#ADD8E6",padding:"4px"}}>{translated}</p>}
        
        </Modal.Body>
{
  console.log(props.response)
}
        <Modal.Footer>
          {props.response==''?<Button variant="primary" disabled={props.waiting} onClick={props.action} >Extract</Button>:props.response==='OOPS, NO TEXT DETECTED'?<Button variant="primary" disabled="true" >Extract</Button>:<Dropdown textToTranslate={props.response} visible={setShow} translate={setTranslated} loading={setLoading}/>}
          
          
        </Modal.Footer>
      </Modal.Dialog>
    </div>

        </>
  )
}

export default Popup;
