import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const AiwithText = () => {
    const genAI = new GoogleGenerativeAI('AIzaSyBwF4HEhvpBAfINN0zPphKrPSZ_V3Xi1Kg');

    const [search, setSearch] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);


    async function aiRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `${search}`;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
    }

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleClick = () => {
        aiRun();
    }

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <input placeholder='Seach anything' onChange={(e) => handleChangeSearch(e)} />
                <button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>Search</button>
            </div>

            {
                loading == true && (aiResponse == '') ?
                    <p style={{ margin: '30px 0' }}>Loading ...</p>
                    :
                    <div style={{ margin: '30px 0'}}>
                        <p onCopy={(event)=>{
                            event.preventDefault();
                        }}>{aiResponse}</p>
                    </div>
            }
        </div>
    );
};

export default AiwithText;