import StarHating from 'components/starHating';
import FormMovie from 'pages/formMovie';
import React, { useState } from 'react'
import './styles.css'

export default function CardMovie(props: any) {
  const [details, setDetails] = useState({})
  const [isMovie, setIsMovie] = useState(false)

  function whatsMovie() {
    setDetails(props.name)
    setIsMovie(true)
  }

  return (
    <div className='cardMovie'>
      <img alt='MovieImg' src={props.name.poster_path} className='poster' />
      <h1 className='title'>{props.name.title.length > 25
        ? props.name.title.substring(0, 23) + '...'
        : props.name.title}</h1>

      <StarHating hate={props.name.vote_average * 0.5} />

      <button className='details' onClick={() => whatsMovie()} >
        DETALHES
      </button>
      {isMovie ?
        <div>
          <FormMovie setIsMovie={setIsMovie} details={details} />
        </div>
        : null}
    </div>
  )
}
