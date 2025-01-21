import React, { useEffect, useRef, useState } from 'react'
import JoditEditor from 'jodit-react'
import { useLocation, useParams } from 'react-router-dom'
import { db } from '../components/firebase'
import { addDoc, collection, doc, getDoc } from 'firebase/firestore'
import { Button } from 'react-bootstrap'
import { useClerk } from '@clerk/clerk-react'

const Editor = () => {
  const text=useLocation().state
  const {id}=useParams()
  const editor=useRef(null)
  const [val,setVal]=useState(text)
  const[title,setTitle]=useState('Untitled')

  const config={
    height:500
  }

  const handleChange = (event) => {
    setTitle(event.target.innerText);
    console.log(title)
  };

  const {user}=useClerk()


const saveToDb=async()=>{
await addDoc(collection(db,"User-data"),{
  fname:user.firstName,
  lname:user.lastName,
  email:user.emailAddresses[0].emailAddress,
  title:title,
  text:val,
  private:true
})  
console.log("success")

}

 

        

  return (
    <>
         <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'10px'}}>
        <span onInput={handleChange} style={{marginBottom:'0px'}} contentEditable autoFocus>{title}</span>
        
        <Button onClick={saveToDb}>Save</Button>
        </div>



    
    <div style={{marginTop:'10px'}}>
      <JoditEditor
      ref={editor}
      value={text}
      onChange={newContent=>setVal(newContent)}
      config={config}
      />
    </div>
    </>   
    
  )
}

export default Editor