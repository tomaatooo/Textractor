import React from 'react'

const FeatureBox = ({image,title,desc}) => {
  return (
    <div className="feature-1" >
    <img src={image}/>
    <div className="content">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  </div>
  )
}

export default FeatureBox