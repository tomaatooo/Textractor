import React from 'react'
import { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import Button from 'react-bootstrap/Button';

const Dropdown = ({textToTranslate,translate,visible}) => {
    const [dvalue,setDvalue]=useState('Choose language')
    const options=[
        {label:"Choose language",value:'Choose language'},
        {label:"Hindi", value:'hindi'},
        {label:"Bengali",value:'bengali'}
    ]

function click(){
    visible('none')
    Translate()
}

function handleSelect(event){
    setDvalue(event.target.value)
}

        const [translated, setTranslated] = useState('');

        const genAI = new GoogleGenerativeAI('AIzaSyBwF4HEhvpBAfINN0zPphKrPSZ_V3Xi1Kg');

        async function Translate() {
                const model3 = genAI.getGenerativeModel({ model: "gemini-pro" });
                const prompt = `Translate ${textToTranslate} to ${dvalue}`;
                const result = await model3.generateContent(prompt);
                const response = await result.response;
                const text = response.text();
                translate(text)
                console.log(text)
        }

  return (
    <div>
        <select className='select-to' onChange={handleSelect}>
        {options.map(option=>(
            <option value={option.value}>{option.label}</option>
        ))}
        </select>
        <Button disabled={dvalue=='Choose language'} variant='primary' onClick={click}>Translate</Button>
       
    </div>
  )
}

export default Dropdown