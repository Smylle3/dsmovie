import React from 'react'
import './styles.css'
import { BsStar, BsStarFill } from "react-icons/bs";

export default function StarHating(props: any) {
    return (
        <div className='hate' >
            <div className='hating' >
                {props.hate >= 1 ?
                    <BsStarFill size={25} className='hating' />
                    : <BsStar size={25} className='hating' />
                }
            </div>
            <div className='hating' >
                {props.hate >= 2 ?
                    <BsStarFill size={25} className='hating' />
                    : <BsStar size={25} className='hating' />
                }
            </div>
            <div className='hating' >
                {props.hate >= 3 ?
                    <BsStarFill size={25} className='hating' />
                    : <BsStar size={25} className='hating' />
                }
            </div>
            <div className='hating' >
                {props.hate >= 4 ?
                    <BsStarFill size={25} className='hating' />
                    : <BsStar size={25} className='hating' />
                }
            </div>
            <div className='hating' >
                {props.hate === 5 ?
                    <BsStarFill size={25} className='hating' />
                    : <BsStar size={25} className='hating' />
                }
            </div>
        </div>
    )
}
