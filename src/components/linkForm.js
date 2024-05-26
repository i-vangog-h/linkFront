import React, { useState } from 'react';
import { generateShortLink } from '../services/api';

const LinkForm = () => {
  const [url, setUrl] = useState('');
  const [hash, setHash] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (url){ // is not null
      try{
        const response = await generateShortLink( url )
        setHash(response.hash);
        console.log(hash);
        setUrl('');
      }
      catch (error){
        console.error("Error creating shortened link: ", error);
      }
    }
  };

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your URL"
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {hash && ( //if hash is not null then display
        <div>
          <p>Hash: {hash}</p>
        </div>
      )}
    </div>
  );
};

export default LinkForm;
