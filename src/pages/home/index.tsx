import CardMovie from 'components/cardMovie';
import React, { useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri';
import './styles.css'

export default function Home() {
  const [movieName, setMovieName] = useState('')
  const [MovieDetails, setmovieDetails] = useState([])
  

  function handleSubmit(event: any) {
    event.preventDefault()

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com',
        'X-RapidAPI-Key': '38b32c159amsh044c0e0ead77262p1374d7jsnc841f01749b0'
      }
    };
    fetch(`https://advanced-movie-search.p.rapidapi.com/search/movie?query=${movieName}&page=1`, options)
      .then(response => response.json())
      .then(response => setmovieDetails(response.results))
      .catch(err => console.error(err));

    setMovieName('')
  }

  return (
    <div className="box">
      <form className='homeForm' onSubmit={(e) => handleSubmit(e)}>
        <input
          type='search'
          className='homeSearch'
          placeholder='Digite o nome de um filme'
          onChange={(e) => setMovieName(e.target.value)}
          value={movieName}
          required
        />
        <button className='homeButton'>
          <RiSearch2Line className='homeButtonIcon' />
        </button>
      </form>
      {MovieDetails.length !== 0 ?
        <div className="box">
          <div className="row">
            {MovieDetails.map((movie) => (
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                <CardMovie name={movie} />
              </div>
            ))}
          </div></div>
        :
        <h1 className='titleHome'>
          Encontre seu filme favorito aqui. Explore já!
        </h1>
      }
    </div>
  )
}
