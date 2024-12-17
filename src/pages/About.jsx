import React from 'react';
import './About.css';
import TitleCard from '../components/TitleCard'

const About = () => {
  return (
    <section className='team'>
      <div className="container">
        <div className="about-about">
          <h3>ABOUT</h3>
          <p>
          In the era of digitization, handwritten text remains a formidable challenge for efficient data processing and analysis. Optical Character Recognition (OCR) techniques have emerged as a promising solution to bridge the gap between handwritten documents and digital platforms. This project endeavours to explore and implement advanced OCR techniques for the detection and recognition of handwritten text, facilitating the seamless integration of analogue content into digital workflows.
          <br/>
          <br/>

          Textractor not only serves as a platform for digitizing image text but also comes in use for reading prescriptions, text summarization and making it a comprehensive and user-centric platform for catering various text-based images.
          </p>
        </div>
        <div className="section-title">
          <h2>Team</h2>
          <div className="underline"></div>
          <p style={{color:"white"}}>Meet the developers of Textractor</p>
        </div>
        <div className="row">
        <TitleCard dp="pic1.jpg" name="Aayush Das" role="Frontend" desc="I am Lonely" email="mailto:twenty12aayush@gmail.com" linkedin="https://www.linkedin.com/in/iuss/" github="https://www.github.com/tomaatooo"/>

        <TitleCard dp="default.jpg" name="Aiswanik Dhar" role="title" desc="" email="mailto:twenty12aayush@gmail.com" linkedin="https://www.linkedin.com/in/iuss/" github="https://www.github.com/tomaatooo"/>

        <TitleCard dp="default.jpg" name="Md Kaif Raza" role="title" desc="" email="mailto:twenty12aayush@gmail.com" linkedin="https://www.linkedin.com/in/iuss/" github="https://www.github.com/tomaatooo"/>
        
        <TitleCard dp="default.jpg" name="Parichay Sengupta" role="title" desc="" email="mailto:twenty12aayush@gmail.com" linkedin="https://www.linkedin.com/in/iuss/" github="https://www.github.com/tomaatooo"/>
          
        
        </div>
      </div>
    </section>
  );
};

export default About;