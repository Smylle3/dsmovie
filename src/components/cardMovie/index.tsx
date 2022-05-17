import StarHating from 'components/starHating';
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function CardMovie(props: any) {
  console.log(props.name)
  return (
    <div className='cardMovie'>
      <img alt='MovieImg' src={props.name.poster_path} className='poster' />
      <h1 className='title'>{props.name.title}</h1>

      <StarHating hate={props.name.vote_average * 0.5} />

      <Link to='/form' className='details' >
        DETALHES
      </Link>
    </div>
  )
}
