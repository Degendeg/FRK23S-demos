import React, { useState } from 'react';

const CSP = () => {
  // State variables to track whether image loading is blocked and the image URL
  const [blocked, setBlocked] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  // Function to fetch a random dog image from a public API
  const fetchImage = async () => {
    try {
      // Fetch data from the API endpoint
      const response = await fetch('https://dog.ceo/api/breeds/image/random');

      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }

      // Extract image URL from the response data
      const data = await response.json();
      setImageUrl(data.message);

      // Reset blocked state if image loading is successful
      setBlocked(false);
    } catch (error) {
      // Log and handle errors, set blocked state if image loading fails
      console.error(error);
      setBlocked(true);
    }
  };

  return (
    <div>
      {/* Display message if image loading is blocked by CSP */}
      {blocked && <p>Image loading blocked by Content Security Policy (CSP)</p>}

      {/* Button to fetch a new image */}
      <button onClick={fetchImage}>Fetch Image</button>
      <br />
      <br />

      {/* Render the image if URL is available */}
      {imageUrl && <img src={imageUrl} alt="Demo" />}
    </div>
  );
};

export default CSP;