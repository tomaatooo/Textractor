import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64 } from '../helpers/imageHelper';

const AiwithImage = () => {
    const genAI = new GoogleGenerativeAI('AIzaSyBwF4HEhvpBAfINN0zPphKrPSZ_V3Xi1Kg');

    const [image, setImage] = useState('');
    const [imageInineData, setImageInlineData] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    async function aiImageRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent([
            "Read the text from image with indentation", imageInineData
        ]);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
    }

    const handleClick = () => {
        aiImageRun();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        // getting base64 from file to render in DOM
        getBase64(file)
            .then((result) => {
                setImage(result);
            })
            .catch(e => console.log(e))

        // generating content model for Gemini Google AI
        fileToGenerativePart(file).then((image) => {
            setImageInlineData(image);
        });
    }

    // Converts a File object to a GoogleGenerativeAI.Part object.
    async function fileToGenerativePart(file) {
        const base64EncodedDataPromise = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.readAsDataURL(file);
        });

        return {
            inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
        };
    }

    return (
        <div>

            <div>
                <div style={{ display: 'flex' }}>
                    <input type='file' onChange={(e) => handleImageChange(e)} />
                    <button style={{ marginLeft: '20px' }} onClick={() => handleClick()}>Extract</button>
                </div>
                <img src={image} style={{ width: '30%', marginTop: 30 }} />
            </div>

            {
                loading == true && (aiResponse == '') ?
                    <p style={{ margin: '30px 0' }}>Loading ...</p>
                    :
                    <div style={{ margin: '30px 0' }}>
                        <p>{aiResponse}</p>
                    </div>
            }
        </div>
    );
};

export default AiwithImage;