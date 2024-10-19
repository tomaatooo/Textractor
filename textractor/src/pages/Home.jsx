import React, { useState } from 'react';
import AiwithText from '../components/AiwithText';
import AiwithImage from '../components/AiwithImage';

const Home = () => {
  const [aiWith, setLAiWith] = useState('image');

  const handleAiWith = (value) => {
    setLAiWith(value);
  }

  return (
    <div>
      <h1>Image to Text</h1>
      <p>Extract Handwritten Text using OCR</p>

      <div style={{ margin: '30px 0' }}>

      <button
          className={aiWith == 'image' ? 'aiWithActive' : ''}
          onClick={() => handleAiWith('image')}>
          Extract from Image
        </button>

        <button
          style={{ marginLeft: '20px' }}
          onClick={() => handleAiWith('text')}
          className={aiWith == 'text' ? 'aiWithActive' : ''}>
          Generate Text
        </button>

        
      </div>

      {
        aiWith == 'text' ?
          <AiwithText />
          :
          <AiwithImage />
      }
    </div>
  );
};

export default Home;