
import './Components/style.css'
import React from "react"
import Animeinfo from './Components/Animeinfo';
import AnimeList from './Components/AnimeList';
import { useEffect, useState } from "react";
// import theme from './Components/ThemeContext';

function App() {
  const [search, setSearch] = useState("Naruto");
  const [animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState();
  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`)
    const resData = await res.json();
    setAnimeData(resData.data)
    console.log(resData);
    console.log(resData.data);
  }

  useEffect(() => {
    getData()
  }, [search])


  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <div className="header">
        <h1>Here is the list of Anime</h1>
        <div className="search-box">
          <input
            type="search"
            placeholder="Anime search"
            // In your component render method
            onChange={handleInputChange}
          ></input>
        </div>
        <div className='About' ><button>About</button>

        </div>
      </div>

      <div className='container'>
        <div className='animeInfo'>
          {animeInfo && <Animeinfo animeInfo={animeInfo}></Animeinfo>}
        </div>
        <div className='anime-row'>
          <h2 className='text-heading'>List of Anime</h2>
          <div className='row'>
            <AnimeList
              animelist={animeData}
              setAnimeInfo={setAnimeInfo}

            ></AnimeList>
          </div>
        </div>

      </div>


    </>
  );
}

export default App;