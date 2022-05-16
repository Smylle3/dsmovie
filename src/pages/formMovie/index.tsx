import React, { useState } from 'react'
import { BsStar, BsStarFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
import './styles.css'

export default function FormMovie() {

  const [manyStars, setManyStars] = useState(0)

  function Avaliation(starNumber: number) {
    setManyStars(starNumber)
  }

  return (
    <div className='container'>
      <div className='cardMovie'>
        <img alt='MovieImg'  />
        <h1>Title Movie</h1>
        <form>
          <label htmlFor='email' className='label' >
            Informe seu Email*
          </label>
          <input id='email' type='email' placeholder='Email' required />

          <div className='stars' >
            <div className='onlyStar' onClick={() => Avaliation(1)} >
              {manyStars >= 1 ? 
                <BsStarFill size={25} className='onlyStar' /> 
                : <BsStar size={25} className='onlyStar' />
              }
            </div>
            <div className='onlyStar' onClick={() => Avaliation(2)} >
              {manyStars >= 2 ? 
                <BsStarFill size={25} className='onlyStar' /> 
                : <BsStar size={25} className='onlyStar' />
              }
            </div>
            <div className='onlyStar' onClick={() => Avaliation(3)} >
              {manyStars >= 3 ? 
                <BsStarFill size={25} className='onlyStar' /> 
                : <BsStar size={25} className='onlyStar' />
              }
            </div>
            <div className='onlyStar' onClick={() => Avaliation(4)} >
              {manyStars >= 4 ? 
                <BsStarFill size={25} className='onlyStar' /> 
                : <BsStar size={25} className='onlyStar' />
              }
            </div>
            <div className='onlyStar' onClick={() => Avaliation(5)} >
              {manyStars === 5 ? 
                <BsStarFill size={25} className='onlyStar' /> 
                : <BsStar size={25} className='onlyStar' />
              }
            </div>
          </div>

          <label htmlFor='description' className='label' >
            O que achou do filme?
          </label>
          <textarea id='description' placeholder='Descrição' />

          <button className='enviarButton' >ENVIAR</button>
        </form>
        <Link to='/' className='link' >
          <button className='cancelarButton' >CANCELAR</button>
        </Link>
      </div>
    </div>
  )
}
