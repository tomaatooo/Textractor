import React, { useCallback, useEffect, useRef, useState } from 'react'
import JoditEditor from 'jodit-react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { db } from '../components/firebase'
import { addDoc, collection, doc, getDoc } from 'firebase/firestore'
import { Button } from 'react-bootstrap'
import { useClerk } from '@clerk/clerk-react'

const Editor = () => {

  const navigate=useNavigate()

  const text=useLocation().state
  const {id}=useParams()
  const editor=useRef(null)
  
  const [val,setVal]=useState(text)
  const[title,setTitle]=useState('Untitled')

  const config={
    height:500
  }

  const {user}=useClerk()


const saveToDb=async()=>{
  const field=document.getElementById('editor')
          const text=field.value

          const field1=document.getElementById('doctitle')
          const heading=field1.innerHTML
await addDoc(collection(db,"User-data"),{
  fname:user.firstName,
  lname:user.lastName,
  email:user.emailAddresses[0].emailAddress,
  title:heading,
  text:text,
  private:true
})  
console.log("success")
navigate('/dashboard')
}



        

  return (
    <>
         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'10px'}}>
        
         <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
         <p contentEditable id='doctitle' style={{marginBottom:'0px',color:'white',fontSize:'24px'}}>Untitled</p> 
         <i style={{color:'white'}} class="fa-solid fa-pen-to-square"></i>
        </div>
        
        <Button style={{backgroundColor:'green'}} onClick={saveToDb}>Save</Button>
        </div>



    
    <div style={{marginTop:'10px'}}>
      <JoditEditor
      id="editor"
      ref={editor}
      value={text}
      config={config}
      />
    </div>
    </>   
    
  )
}

export default Editor