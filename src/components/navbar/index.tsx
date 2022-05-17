import React from 'react'
import './styles.css'
import { SiGithub } from 'react-icons/si';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <header>
                <div className='navbar'>
                    <Link to='/' ><h1>DSMovie</h1></Link>
                    <text className='info' >
                        © 2022 Smylle, development by React Js. All rights reserved
                    </text>
                    <a target='_blank' href='https://github.com/Smylle3/dsmovie' rel="noreferrer">
                        <SiGithub className='icon' size={25} />
                        /Smylle3
                    </a>
                </div>
            </header>
            <div className='fix' />
        </>
    )
}