import { doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../components/firebase'
import { Button } from 'react-bootstrap'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const View = () => {
  const printRef=useRef(null)
  const {id}=useParams()
  const[val,setVal]=useState([])
  const[loading,setLoading]=useState(true)


  useEffect(() => {
    
    const getData = async () => {
      try {
        
        const docRef = doc(db, "User-data", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          
          const data = { ...docSnap.data(), id: docSnap.id };
          setVal([data]); 
          console.log("Fetched Document:", data);
  
        } else {
          console.log("No document found with the specified ID");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
        setLoading(false); 
      
    };

    
    if (id) getData(); 
  }, [id]);


  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) {
      return;
      
    }


    console.log(element)
    const canvas = await html2canvas(element, {
      scale: 2,
    });
    console.log(canvas)
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${val[0].title}.pdf`)
  }




  return (
    <>
    {
      loading?'':<div style={{justifyItems:'center'}}>
        <div style={{padding:'15px',width:'60%'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <p style={{color:'white',margin:'0px',fontSize:'24px'}}>{val[0].title}</p>
         <Button onClick={handleDownloadPdf} style={{backgroundColor:"green"}}>Save Pdf</Button>
        
        </div>
        </div>
        
        <div style={{backgroundColor:'white',height:'900px',width:'750px', marginBottom:'50px'}}>
          <div ref={printRef}>
          <div style={{padding:'50px'}} dangerouslySetInnerHTML={{ __html: val[0].text }}
    />
          </div>
          
        </div>
        
      </div>
}</>
    
  )
}

export default View