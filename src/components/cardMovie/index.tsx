import StarHating from 'components/starHating';
import React from 'react'
/* import { Link } from 'react-router-dom' */
import './styles.css'

export default function CardMovie(props: any) {
  return (
    <div className='cardMovie'>
      <img alt='MovieImg' src={props.name.Poster} className='poster' />
      <h1>{props.name.Title}</h1>

      <StarHating hate={props.name.imdbRating * 0.5} />

      {/* <Link to='/form' className='details' >
        DETALHES
      </Link> */}
    </div>
  )
}
