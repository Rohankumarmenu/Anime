import React from 'react'
import './style.css'
import Animeinfo from './Animeinfo';
import AnimeList from './AnimeList';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Footer from './Footer';
function Firstpage() {

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
        <div>
            <div className="header">
                <h1>Anime</h1>
                <div className="search-box">
                    <input
                        type="search"
                        placeholder="Anime search"
                        
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className='aboutlink'>
                    <Link to ="/about">About</Link>
                </div>
                <div className='supportlink'>
                <Link to ="/support">Support</Link>
                </div>
            </div>
            <div></div>
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
          <Footer></Footer>
          </div>
        </>
    )
}

export default Firstpage