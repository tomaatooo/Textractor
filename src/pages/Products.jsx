import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
import featuredata from '../jsons/features.json'
import Feature from '../components/FeatureBox'

const Products = () => {
  return (
    <>
    <div className='main-header' >
      <h3>Services</h3>
    </div>
    <div className='body-container'>
      <div className="body-1" >
        <img src="docreader.jpg"/>
        <div className='over' style={{top:"-400px"}}>.</div>
        <div className="content" >
        <h3 style={{display:"flex",alignItems:"center"}}>Text from Image
          <span title="Only english is supported" style={{fontSize:"10px",color:"white",backgroundColor:"#000",padding:"2px",marginLeft:"4px",cursor:"help"}}>EN</span>
        </h3>
        <p>Having a hard time reading or copying from images? Use the tool and the work will be done in seconds.</p>
        <Link to="/docreader" class="btn">Try Out</Link>
        </div>
      </div>

      
      <div className="body-1" >
      <img src="preader.jpg"/>
      <div className='over'>New!</div>
        <div className="content">
        <h3>Prescription Reader</h3>
        <p>Want to order your medicines but cannot read what the doctor wrote? We got it covered.</p>
        <Link to="/preader" class="btn">Try Out</Link>
        </div>
      </div>
    </div>


      <div className="features">
        <div className="features-header">
          <h3>Features of the Technology</h3>
        </div>
        <div className="features-container">
        
        
        {featuredata.map(feature=>{
          return(
            <Feature image={feature.image} title={feature.title} desc={feature.desc}/> 
          )
        })}
          

        </div>
      </div>

        <div className="feedbacks">
          <div className="feedback-head">
            <h3>Feedback</h3>
          </div>
          
          <div className="feedback-container">

            <div className="feedback-1" >
              <img src="default.jpg"/>
              <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
              </div>
              <div className="content">
                <h3 style={{marginTop:"10px",color:"#fff"}}>A. Das</h3>
                <p style={{fontStyle:"italic"}}>Great tool, loved it</p>
              </div> 
            </div>
            <div className="feedback-1" >
            <img src="default.jpg"/>
            <div className="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            </div>
            <div className="content">
                <h3 style={{marginTop:"10px",color:"#fff"}}>P. Sen</h3>
                <p style={{fontStyle:"italic"}}>Saved my time  </p>
              </div> 
          </div><div className="feedback-1" >
            <img src="default.jpg"/>
            <div className="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            </div>
            <div className="content">
                <h3 style={{marginTop:"10px",color:"#fff"}}>S. Dey</h3>
                <p style={{fontStyle:"italic"}}>Nice tool, needs more update</p>
              </div> 
          </div>
          </div>

        </div>

      
      
    
    </>
  )
}

export default Products