import React, { useState } from 'react';
import { generateShortLink } from '../services/api';

const LinkForm = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (url){ // is not null
      try{
        const response = await generateShortLink( url )
        setShortenedUrl(response.shortUrl);
        copyToClipboard(response.shortUrl);
        console.log(shortenedUrl);
        setUrl('');
      }
      catch (error){
        console.error("Error creating shortened link: ", error);
      }
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy: ', err);
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
      {shortenedUrl && ( //if shortenedUrl is not null then display
        <div className='shortLinkDisplay'>
          <p>Short: </p>
          <p><a href={shortenedUrl}> {shortenedUrl} </a></p>
        </div>
      )}
    </div>
  );
};

export default LinkForm;
