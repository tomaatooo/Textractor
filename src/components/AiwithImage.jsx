import React, { useState,useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getBase64 } from '../helpers/imageHelper';
import './main.css';
import PopupPes from './PopupPes';


const AiwithImage = () => {
    const genAI = new GoogleGenerativeAI('AIzaSyBwF4HEhvpBAfINN0zPphKrPSZ_V3Xi1Kg');
    const load='/loading.gif'
    const [image, setImage] = useState('');
    const [imageInineData, setImageInlineData] = useState('');
    const [aiResponse, setResponse] = useState('');
    const [contact,setContact]=useState('');
    const [loading, setLoading] = useState(false);
    const [play,setPlay]=useState(false);
    const [newPlay,setNewPlay]=useState(false)
    const [popup,setPopup]=useState(false);
    

    async function aiImageRun() {
        setLoading(true);
        setResponse('');
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent([
            "You are a pharmacist. Just read only the medicine names from image, if no name show 'NO MEDICINES FOUND'", imageInineData
        ]);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        setLoading(false);
        
        const result1 = await model.generateContent([
            "Read only the doctor's or physician's full name from image, if not available return no doctor's informantion available", imageInineData
        ]);
        const response1 = await result1.response;
        const text1 = response1.text();
        setContact(text1);


    }


    const handleClick = () => {
        aiImageRun();
        setPlay(false)
        setNewPlay(true)
        setBtn(true);
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        getBase64(file)
            .then((result) => {
                setPlay(false)
                console.log(image);
                setImage(result);
                setPopup(true);
            })
            .catch(e => console.log(e))

        
        fileToGenerativePart(file).then((image) => {
            setImageInlineData(image);
        });
    }

   
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
                <div id="matter" style={{ display: 'flex',justifyContent:'center' }}>
                    <input type='file' accept='image/png,image/jpg,image/jpeg' id='upload' onChange={(e) => {handleImageChange(e)
                        setResponse('')
                        setContact('');
                                        
                    }
                    } />
                    <label for='upload'><i class="fa-solid fa-upload"></i> Upload Image</label>
                </div>
                <div style={{textAlign:"center"}}>
                
                </div>
                
                {  
                   popup===true ? <PopupPes image={image} trigger={setPopup} action={handleClick} response={aiResponse} waiting={loading} contact={contact}></PopupPes>:""
                   
                }
                
            </div>
                    
              {/*code*/}
        </div>
    );
};

export default AiwithImage;
