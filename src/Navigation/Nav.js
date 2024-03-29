import React from 'react';
import './nav.css';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai';

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className='nav-container'>
        <input type='text'placeholder='Buscar zapatillas...'
          onChange={handleInputChange}
          value={query} 
          className='nav-container__search-input'
        />
      </div>

      <div className='profile-container'>
        <a href='/'>
          <FiHeart className='nav-icons' />
        </a>
        <a href='/'>
          <AiOutlineShoppingCart className='nav-icons' />
        </a>
        <a href='/'>
          <AiOutlineUserAdd className='nav-icons' />
        </a>
      </div>
    </nav>
  )
}

export default Nav;
