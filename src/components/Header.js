import React from 'react'
import { Link } from 'react-router-dom'
import { SiSpacex } from 'react-icons/si'
export default function Header() {
    return (
        <header className='absolute flex items-center justify-between px-5 w-full' >
            <div>
                <Link to={'/'}>
                    {<SiSpacex className='text-8xl text-white' />}
                </Link>
            </div>
            <nav >
                <ul className='flex flex-row items-center justify-evenly '>
                    <li>
                        <Link to={'/search'} className='text-white text-sm lg:text-base'>Search</Link>
                    </li>
                    <li>
                        <Link to={'/capsules'}>Capsules</Link>
                    </li>
                    <li>
                        <Link to={'/rocket'}>Rocket</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
