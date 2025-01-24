import React from 'react'
import { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import Button from 'react-bootstrap/Button';
import {db} from './firebase'
import { addDoc,collection } from 'firebase/firestore';
import { SignedIn, useClerk } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const Dropdown = ({textToTranslate,translate,visible,loading}) => {
    const [dvalue,setDvalue]=useState('Choose language')
    


    const options=[
        {label:"Choose language",value:'Choose language'},
        {label:"Hindi", value:'hindi'},
        {label:"Bengali",value:'bengali'}
    ]

function click(){
    Translate()
    visible('none')
    
}





function handleSelect(event){
    setDvalue(event.target.value)
}

        const [translated, setTranslated] = useState('');

        const genAI = new GoogleGenerativeAI('AIzaSyBwF4HEhvpBAfINN0zPphKrPSZ_V3Xi1Kg');

        async function Translate() {
                loading(true)
                console.log(loading)
                const model3 = genAI.getGenerativeModel({ model: "gemini-pro" });
                const prompt = `Translate ${textToTranslate} to ${dvalue}`;
                const result = await model3.generateContent(prompt);
                const response = await result.response;
                const text = response.text();
                translate(text)
                loading(false)
        }

  return (
    <div style={{display:"flex"}}>
        <SignedIn><Link to='/editor' state={textToTranslate}><Button>Editor</Button></Link> </SignedIn>
       
    <div>
        <select className='select-to' style={{marginRight:"8px",borderRadius:"5px",border:"none",padding:"3px"}} onChange={handleSelect}>
        {options.map((option,index)=>(
            <option key={index} value={option.value}>{option.label}</option>
        ))}
        </select>
        <Button disabled={dvalue=='Choose language'} variant='primary' onClick={click}>Translate</Button>
       
    </div>
    </div>
  )
}

export default Dropdown