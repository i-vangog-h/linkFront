import React, { useState } from 'react';

const LinkForm = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const baseUrl = "https://localhost:5011/api";
  const postEndpoint = "/generate";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch( baseUrl + postEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(url),
      });
      const data = await response.json();
      setShortenedUrl(data.shortenedUrl);
      console.log(shortenedUrl ?? "not yet set");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
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
      {shortenedUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default LinkForm;
