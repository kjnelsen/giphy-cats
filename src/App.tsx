import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Cards from "./Cards";

function App() {

  const [gifArray, setGifArray] = useState<any []>([]);
  const [offset, setOffset] = useState(0);


  const getGif = async () => {
    const apiKey = '59VOX2e6oP33l1iUvqNnZzTt8ToaSakW';
    const search = 'cats';
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=5&offset=${offset}&lang=en`);
    const gifs = await response.text();
    const gifsJson = JSON.parse(gifs);
    const combinedArray = gifArray.concat(gifsJson.data);
    setGifArray(combinedArray);
    setOffset(offset + 5);

  }

  return (
    <div className="App">
        <Cards cards={gifArray} />
        <button onClick={getGif}>Load some cats</button>
    </div>
  );
}

export default App;
