import React, { useEffect, useRef, useState } from 'react'
import JoditEditor from 'jodit-react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../components/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { Button } from 'react-bootstrap'

const Edit = () => {
  const navigate=useNavigate()
  const {id}=useParams()
  const editor=useRef(null)
  const [val,setVal]=useState()
  const[loading,setLoading]=useState(true)

  const config={
    height:500
  }

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
        },[]);


        const updateRecordFirestore = async () => {
                  
          
          const recordRef = doc(db, "User-data", id); 
          const field=document.getElementById('editor')
          const text=field.value

          const field1=document.getElementById('doctitle')
          const heading=field1.innerHTML
        
          
          
          const newData = {
            text:text,
            title: heading
          };
        
          try {
            await updateDoc(recordRef, newData);
            console.log("Record updated successfully!");
          } catch (error) {
            console.error("Error updating record:", error);
          }
          navigate('/dashboard')
        };

        

        

  return (
    <>
    {!loading&&<div style={{marginTop:'10px'}}>
      
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        
        <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
         <p contentEditable id='doctitle' style={{marginBottom:'0px',color:'white',fontSize:'24px'}}>{val[0].title}</p> 
         <i style={{color:'white'}} class="fa-solid fa-pen-to-square"></i>
        </div>
        


        <Button style={{backgroundColor:'green'}} onClick={updateRecordFirestore}>Update</Button>
      </div>
      <div style={{marginTop:'10px'}}>
      <JoditEditor id="editor"
      ref={editor}
      value={val[0].text}
      config={config}
      /></div>
    </div>}
    </>   
    
  )
}

export default Edit