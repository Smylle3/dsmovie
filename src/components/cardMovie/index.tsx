import StarHating from 'components/starHating';
import React from 'react'
import './styles.css'

export default function CardMovie(props: any) {

  function whatsMovie() {
    props.setIsMovie(true)
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
    </div>
  )
}
