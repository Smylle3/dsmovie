import React from 'react'
import './styles.css'
import { SiGithub } from 'react-icons/si';

export default function NavBar() {
    return (
        <header>
            <div className='navbar'>
                <h1>DSMovie</h1>
                <a target='_blank' href='https://github.com/Smylle3/dsmovie' rel="noreferrer">
                    <SiGithub className='icon' size={25} />
                    /Smylle3
                </a>
            </div>
        </header>
    )
}