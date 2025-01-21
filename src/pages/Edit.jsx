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
  const [edit,setEdit]=useState('')
  const [update,setUpdate]=useState(false)
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
        
          
          const newData = {
            text:edit,
            title: "edited",
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
        <p contentEditable  style={{marginBottom:'0px'}}>{val[0].title}</p>
        <Button disabled={!update} onClick={updateRecordFirestore}>Update</Button>
      </div>
      <JoditEditor
      ref={editor}
      value={val[0].text}
      onChange={newContent=>{setEdit(newContent);setUpdate(true)}}
      config={config}
      />
    </div>}
    </>   
    
  )
}

export default Edit