import React from 'react'
function AnimeList({ animelist,setAnimeInfo }) {
    return (
        <>
            {
                animelist ? (
                    animelist.map((anime, index) => {
                        return (
                            <div className='card' key={index} onClick={()=>setAnimeInfo(anime)}>
                                <img src={anime.images.jpg.large_image_url} alt="AnimaImage"></img>
                                <div className='anime-info'>
                                    {/* <h4>{anime.title}</h4> */}
                                    <h4 style={{ fontSize: '9.5px' }}>{anime.title}</h4>

                                </div>
                            </div>
                        )
                    })
                ) : "Not Found"
            }

        </>

    )
}


export default AnimeList;