import React from 'react'
import AiwithText from '../components/AiwithText';

const Prescriptionreader = () => {
  return (
    <div style={{padding: '50px'}}>
      <h3 style={{textAlign:'center',fontFamily:"sans-serif",fontWeight:"800",color:"white",fontSize:"42px"}}>Extract Text</h3>
      <p style={{textAlign:'center',color:"wheat"}}>Extract Handwritten Text using OCR</p>

      <div style={{ margin: '30px 0' }}>
      </div>
      <AiwithText />
      
    </div>
  )
}

export default Prescriptionreader