import StarHating from 'components/starHating';
import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export default function FormMovie(props: any) {
  console.log(props.details)

  return (
    <div className='container'>
      <div className='infoMovie' >
        <img alt='MovieImg' src={props.details.poster_path} className='imageMovie' />
        <div className='movieContent'>
          <h1 className='movieTitle' >{props.details.title}</h1>

          <text className='movieOverview'>{props.details.release_date}</text>

          <div className='moviePopularity' >
            <StarHating hate={props.details.vote_average * 0.5} />
            <text>Popularity {props.details.popularity}</text>
          </div>

          <text className='movieOverview'>{props.details.overview}</text>

          <Link to='/' className='movieLink' >
            <button className='cancelarButton' onClick={() => props.setIsMovie(false)} >FECHAR</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
