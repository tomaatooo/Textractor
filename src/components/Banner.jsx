import React from 'react'

const Banner = ({text,subtext}) => {
  return (
    <div style={{backgroundColor:"rgba(245, 222, 179,0.9)",height:"auto",marginBottom:"8px",borderRadius:"4px",padding:"10px",width:"auto"}}>

        <p style={{fontFamily:"sans-serif",fontWeight:"600",marginLeft:"10px",fontSize:"28px",marginBottom:"0px",color:"#219ebc"}}>{text}</p>

        <p style={{marginLeft:"15px",fontSize:"15px",fontStyle:"italic"}}>{subtext}</p>
        
        </div>
        
  )
}

export default Banner