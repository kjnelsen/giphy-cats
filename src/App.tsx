import React, {useState} from 'react';
import './App.css';
import Cards from "./Cards";

function App() {

  const [gifArray, setGifArray] = useState<any []>([]);
  const [offset, setOffset] = useState(0);

  const getGif = async () => {
    const apiKey = '59VOX2e6oP33l1iUvqNnZzTt8ToaSakW';
    const search = 'cats';
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}&limit=3&offset=${offset}&lang=en`);
    const gifs = await response.text();
    const gifsJson = JSON.parse(gifs);
    const combinedArray = gifArray.concat(gifsJson.data);
    setGifArray(combinedArray);
    setOffset(offset + 3);
  }

  return (
    <div className="App">
        <Cards cards={gifArray} />
        <button className={'card'} onClick={getGif}>Load some cats</button>
    </div>
  );
}

export default App;
