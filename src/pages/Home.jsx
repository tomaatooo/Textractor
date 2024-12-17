import './Home.css';
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <>
    <div className="container-home">
    <h2 style={{color:"white", fontSize:"48px"}}>Extract Texts from Images with Ease</h2>
    <p>Our powerful tool allows you to effortlessly extract texts from images in just a few clicks. Say goodbye to manual typing and let our technology do the work for you.</p>
    </div>
    
 
 
    <div className='home-container-main'>
      <div className="hc" style={{overflow:"hidden",textAlign:"center",width:"450px"}}>
      <img src="home-1.jpg" alt="image" style={{overflow:"cover",width:"400px",borderRadius:"5px"}} />
      
      </div>
      <div className="hc" style={{background:"none",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
      <Banner text="Text Extraction" subtext="Effortlessly extract text from images using advanced OCR technology."/>
      <Banner text="File Format Support" subtext="Supports various image file formats including JPEG, JPG, and PNG."/>
      <Banner text="Speed and Accuracy" subtext="Get fast and accurate text extraction results with high precision."/>
      </div>
      
    </div>


    <div className="banner-container">
    <div className="h-banner">
      one
    </div>
    <div className="h-banner2">
      <div>
      <h3 id="h-h">Extract text from images effortlessly</h3>
      <p id="h-p">Easily convert text from images into editable and searchable format</p>
      </div>
      <div className='btn-0'>
        
      <Link to="/docreader" style={{textWrap:"nowrap"}}>Try Now </Link>
      </div>
    </div>

    </div>
    <h3 style={{fontSize: "42px",
    fontWeight: "800",
    fontFamily:"sans-serif",
    textAlign: "center",
    marginTop: "30px",
    color: "white"
    }} >How to Use?</h3>
    <div className="h-banner3" style={{alignContent:"center"}}>

      <video style={{marginTop:"20px"}} width="auto" height="180vh" controls>
      <source src="Home.mp4" type="video/mp4"/>
      </video>
      <div className='how-to'>
        <ul>
          <li>Upload Image</li>
          <li>Click on Extract</li>
          <li>Copy the Text</li>
        </ul>
      </div>
    </div>
    
    </>
  );
};

export default Home;