import React from 'react'
import AiwithImage from '../components/AiwithImage';

const Prescriptionreader = () => {
  return (
    <div style={{padding: '50px'}}>
      <h3 style={{textAlign:'center',fontFamily:"sans-serif",fontWeight:"800",color:"white",fontSize:"42px"}}>Read Prescription</h3>
      <p style={{textAlign:'center'}}>Extract Handwritten Text using OCR</p>

      <div style={{ margin: '30px 0' }}>
      </div>
      <AiwithImage />
      
    </div>
  )
}

export default Prescriptionreader