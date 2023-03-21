import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [pic, setPic] = useState(null);
  const [bannedKeyWords, setBannedKeyWords] = useState([]);
  const rover = 'curiosity';


  const randomPicture = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=1000&api_key=eQK95wHY0TvbRuyC0UN8VV1HqOA0bVs36EYAiVMW`
      );
      const data = await response.json();

      if (!data.photos || data.photos.length === 0) {
        alert('No pictures available');
        return;
      }



      const filteredPhotos = data.photos.filter((pic) => {
        const keyWords = [pic.camera.name, pic.rover.landing_date, pic.earth_date];
        return !keyWords.some((keyWord) => bannedKeyWords.includes(keyWord));
      });

      if (filteredPhotos.length === 0) {
        alert('No pictures available due to banned key words.');
        return;
      }

      const randomIndex = Math.floor(Math.random() * filteredPhotos.length);
      setPic(filteredPhotos[randomIndex]);
    } catch (error) {
      console.error('Error fetching pictures of Mars: ', error);
      alert('An error occurred while fetching pictures of Mars.');
    }
  };



  useEffect(() => {
    randomPicture();
  }, [bannedKeyWords]);


  const addToBanList = (keyWord) => {
    if (!bannedKeyWords.includes(keyWord)) {
      setBannedKeyWords([...bannedKeyWords, keyWord]);
    }
  };


  const removeFromBanList = (keyWord) => {
    setBannedKeyWords(bannedKeyWords.filter((item) => item !== keyWord));
  };


  if (!pic) return <div>Loading...</div>;

  return (
    <div className="App">

      <h1>Images from Mars! 🛸</h1>

      <div className="pic-container">

        <div className="buttons">
          <img src={pic.img_src} alt={`Rover: ${rover}, Camera: ${pic.camera.name}`} />
          <p>
            Camera Used: {pic.camera.name}{' '}

            <button onClick={() => addToBanList(pic.camera.name)}>Ban</button>
          </p>

        </div>

        <button onClick={randomPicture}>🔀 Discover </button>

      </div>

      <h2>Banned Cameras</h2>

      <ul>

        {bannedKeyWords.map((keyWord, index) => (
          <li key={index}>
            {keyWord}{' '}
            <button onClick={() => removeFromBanList(keyWord)}>Unban</button>
          </li>
        ))}

      </ul>
      
    </div>
  );
}

export default App;