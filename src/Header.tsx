import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className='bg-gray-800 text-white fixed top-0 left-0 right-0'>
      <nav className='container mx-auto flex justify-between p-4'>
        <Link to='/' className='text-xl font-bold'>
          My App
        </Link>
        <ul className='flex space-x-4'>
          <li>
            <Link to='/' className='hover:text-gray-400'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className='hover:text-gray-400'>
              About
            </Link>
          </li>
          <li>
            <Link to='/contact' className='hover:text-gray-400'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
