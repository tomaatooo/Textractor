import React from 'react'

const Error = () => {
  return (
    <div className="error-main" style={{
        background:"rgba(255,255,255,.2)",
        height:"70vh",
        marginTop:"20px",
        borderRadius:"10px",
        flexWrap:"wrap",
        alignContent:"center"     
    }}>

      <h3 style={{textAlign:"center",
        fontFamily:"sans-serif",
        fontSize:"10vw",
        fontWeight:"800",
        color:"white"
      }}>404</h3>
      <p style={{textAlign:"center",
        fontFamily:"sans-serif",
        fontSize:"2vw",
        color:"white"
      }}>Looks that the page you requested for doesn't exist</p>

    </div>
  )
}

export default Error