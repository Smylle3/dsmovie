import CardMovie from 'components/cardMovie';
import React, { useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri';
import './styles.css'

export default function Home() {
  const [movieName, setMovieName] = useState('')
  const [MovieDetails, setmovieDetails] = useState(null)

  function handleSubmit(event: any) {
    event.preventDefault()

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com',
        'X-RapidAPI-Key': '38b32c159amsh044c0e0ead77262p1374d7jsnc841f01749b0'
      }
    };

    fetch(`https://moviesdb5.p.rapidapi.com/om?t=${movieName}`, options)
      .then(response => response.json())
      .then(response => setmovieDetails(response))
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
      {MovieDetails ?
        <CardMovie name={MovieDetails} />
        :
        <h1 className='titleHome'>
          Encontre seu filme favorito aqui. Explore já!
        </h1>
      }
    </div>
  )
}
