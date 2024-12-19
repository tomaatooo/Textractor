import React from 'react'
import '../pages/About.css'

const TitleCard = ({dp,name,role,desc,email,linkedin,github}) => {
  return (
    <>
    <div className='col-lg-6 mt-4'>
            <div className='member d-flex align-items-start'>
              <div className="teampic">
                <img src={dp}className='img-fluid' alt='team1'></img>
              </div>
              <div className="member-info">
                <h4>{name}</h4>
                <span>{role}</span>
              
              <div className="social">
                <a href={email} target='_black'><i class="fa-solid fa-envelope"></i></a>
                <a href={linkedin} target='_black'><i class="fa-brands fa-linkedin"></i></a>
                <a href={github} target='_black'><i class="fa-brands fa-github"></i></a>
              </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default TitleCard